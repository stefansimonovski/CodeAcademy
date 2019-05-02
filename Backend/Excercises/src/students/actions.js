import hat from 'hat';
import Bluebird from 'bluebird';

import models from '../models/index';



const Students = models.Student;

const studentIdValidation = Bluebird.coroutine(
  function* validationStudentsId(id: string) {
    const results: Array = yield Students.findAll();
    const studentsIds = results.map(studentId => studentId.id);
    return studentsIds.includes(id);
  }
);

async function sumItems(list) {
  return list.reduce((acc, cur) => acc + cur, 0);
}

const list = async(req, res, next) => {
  const result: Array = await Students.findAll();
  const arr1 = [2, 2, 4, 5];
  const resultSize = await sumItems(arr1);
  res.status(200).send({ result, size: resultSize});
  await next;
};


const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  const arr3 = [2, 2, 4, 5, 234];
  const resultSize = await sumItems(arr3);
  const validationStudentsId = await studentIdValidation(id);
  if (validationStudentsId) {
    const result: Object = await Students.find({ where: { id }});
    res.status(200).send({ result, size: resultSize });
  }
  res.status(400).send({ info: `Student id ${id} is not found`});

  await next;
};

const create = async(req, res, next) => {
  const {
    firstName,
    lastName, 
    email,
    username,
    score, 
    startedStudies,
  }: {
    firstName: string,
    lastName: string,
    username: ?string,
    email: ?string,
    score: ?string,
    startedStudies: ?string,
  } = req.body;

  const studentId = hat();

  await Students.create({
    id: studentId,
    firstName,
    lastName,
    username,
    email,
    score,
    startedStudies
  });
  res.status(201).send({ info: 'Student has been created!'});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  const updateData: {
    firstName: ?string,
    lastName: ?string,
    email: ?string,
    score: ?string,
    startedStudies: ?string
  } = Object.assign({}, req.body);

  await Students.update(updateData, { where: { id }})
  res.status(204);

  await next;
};

async function del(req, res, next) {
  const { id }: { id: string } = req.params;
  const validationStudentId = await studentIdValidation(id);
  if (!validationStudentId) {
    res.status(400).send({ info: `Student id ${id} is not found`});
  }
  await Students.destroy({ where: { id }});
  res.status(202).send({ info: `Student ${id} has been removed!`});

  await next;
}

export default {
  get,
  list,
  create,
  del,
  update
}