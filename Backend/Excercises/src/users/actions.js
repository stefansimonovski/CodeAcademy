import bcrypt from 'bcrypt';
import hat from 'hat';
import Bluebird from 'bluebird';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

import secrets from '../../config/secrets.json';
import models from '../models/index';

import Sequelize from 'sequelize';
const Op = Sequelize.Op;

require('dotenv').config();

Bluebird.promisifyAll(bcrypt);
Bluebird.promisifyAll(jwt);

const Users = models.Users;

const getModels = async (req, res, next) => {

  const results: Array = await Users.findAll({
    include: [
      {
        model: models.Posts,
        include: [{
          model: models.Comments,
          // include: [{
          //   model: models.Reactions
          // }]
        }]
      }
    ]
  });

  res.status(200).send(results);

  await next;
};

const create = async (req, res, next) => {
  const {
    name,
    username,
    email,
    password,
  }: {
    name: string,
    username: ?string,
    email: ?string,
    password: string,

  } = req.body;

  const userId = hat();
  const salt = await bcrypt.genSaltSync(10);
  const rounds = await bcrypt.getRounds(salt);
  const passHash = await bcrypt.hashSync(password, rounds);

  await Users.create({
    id: userId,
    name,
    username,
    email,
    password: passHash,
    salt
  });

  res.status(201).send({ info: 'User has been created' });

  await next;
}

const update = async (req, res, next) => {
  const { id }: { id: string } = req.params;
  const updateData: {
    name: ?string,
    username: ?string,
    email: ?string,
    password: ?string
  } = Object.assign({}, req.body);

  if (updateData.password && updateData.password.length > 0) {
    const salt = await bcrypt.genSaltSync(10);
    const rounds = await bcrypt.getRounds(salt);
    const passHash = await bcrypt.hashSync(password, rounds);
  }

  await Users.update(updateData, { where: { id } });
  res.status(204).send({ info: 'Updated' });

  await next;
}

const login = async (req, res, next) => {
  const {
    username, password
  }: { username: string, password: string } = req.body;

  if (username) {
    const user = await Users.find({ where: { username }});
    if (!user) {
      res.status(404).send('User not found');
    } else {
      const passCheck = await bcrypt.compareSync(password, user.password);
      if (passCheck) {
        const secretKey = secrets[process.env.NODE_ENV || 'dev'];
        const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' });
        const lastSignIn = { lastSignIn: Date.now(), resetPasswordToken: null, resetPasswordExpires: null, };
        await Users.update(lastSignIn, { where: { username } });

        res.status(200).send({ body: { token }, message: `Welcome ${username} to Code Academy. You have been successfully logged in.` });
      } else {
        res.status(403).send({ message: 'Incorrect password' });
      }
    }
  } else {
    res.status(404).send({ message: 'User is not found' });
  }
}

const resetPassword = async (req, res, next) => {
  const { 
    email, password
  }: {
    email: string, password: string
  } = req.body;

  if (email) {
    const user = await Users.find({ where: { email } });
    if (user) {
      const salt = await bcrypt.genSaltSync(10);
      const rounds = await bcrypt.getRounds(salt);
      const newPassword = await bcrypt.hashSync(password, rounds);

      await Users.update({ password: newPassword}, { where: { email } });
      res.send({message: `You have been successfully updated your password. Your new password is ${password}` });
      res.status(204);
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  }

  await next;
}

const updatePassword = async (req, res, next) => {
  await next;
};

const forgotPassword = async (req, res, next) => {
  const { email }: { email: string } = req.body;

  if (email === '' && !email) {
    res.send('Email required');
  }
  const user = await Users.findOne({ where: { email }});
  if (user) {
    const token = crypto.randomBytes(10).toString('hex');
    user.update({
      resetPasswordToken: token,
      resetPasswordExpires: Date.now() + 3600000,
    });
    const account = await nodemailer.createTestAccount();

    const mailerTransporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: true,
      auth: {
        user: 'your email',
        pass: 'your password'
      },
    });

    const mailOptions = {
      from: 'sender email',
      to: `${user.email}`,
      subject: 'Link to reset password',
      text:  `You are receiving this because you (or someone else) have requested the reset of the password for your accound.\n\n
      Please click on the following link, or past this into your browser to complete the process within one hour of receiving it: \n\n
      http://localhost:3000/reset/${token}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n
      `
    }

    mailerTransporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error('There was an error', err);
      } else {
        res.status(200).send('Recovery email sent');
      }
    })
  } else {
    res.json('Email not found in database');
  }
  await next;
}

const reset = async (req, res, next) => {
  const { resetPasswordToken,
  }: {
    resetPasswordToken: string,
  } = req.query;

  const user = await Users.find({
    where: {
      resetPasswordToken: resetPasswordToken,
      resetPasswordExpires: {
        [Op.gt]: Date.now()
      }
    }
  });
  if (user) {
    res.status(200).send({
      email: user.email,
      user: user,
      message: 'password reset link a-ok'
    });
  } else {
    res.json('password reset link is invalid or has expired');
  }

  await next;
}

// const loginUser = async (req, res, next) => {
//   const {
//     username, password
//   }: { username: string, password: string } = req.body;
  
//   if (username) {
//     const user = await Users.find({ where: { username } });
//     if (!user) {
//       res.status(404).send({ info: 'User not found' });
//     } else {
//       const passCheck: boolean = await bcrypt.compareSync(password, user.password);
//       if (passCheck) {
//         const token = jwt.sign({ user }, secret, { expiresIn: '1h' });
//         await Users.update({ lastSignIn: Date.now() }, { where: { username } });
//         res.status(200).send(token);
//       } else {
//         res.status(404).send({ info: 'Password incorrect' });
//       }
//     }
//   }
//   await next;
// } 

export default {
  create,
  getModels,
  update,
  login,
  resetPassword,
  forgotPassword,
  reset,
}