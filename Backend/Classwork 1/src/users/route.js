import { Router } from 'express';
import actions from './actions';

const userRoute = Router();

userRoute.get('/users', actions.list);
userRoute.get('/users/:id', actions.get)

export default userRoute;