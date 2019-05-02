import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';
import unless from 'express-unless';
import jwt from 'express-jwt';

import indexRouter from './indexRouter/index';

import secrets from '../config/secrets';
import publicRoutes from '../config/public_routes';

const app = express();
const port = process.env.PORT || 3000;

// added middlewares 
app.use(logger('dev'));
app.use(cors());
app.use(helmet()); // helps you secure your Express apps by setting various HTTP headers
app.use(bodyParser.urlencoded({
  extended: false
}));  // basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.json()); // basically tells the system that you want json to be used

const secret = secrets[process.env.NODE_ENV || 'dev'];
const envPublicRoutes = publicRoutes[process.env.NODE_ENV || 'dev'];
envPublicRoutes.push(/\/public/);

app.use(jwt({ secret }).unless({
  path: envPublicRoutes
}));

app.use(indexRouter);

// API listener
app.listen(port, () => {
  console.log(`API is running on ${port}`);
});
