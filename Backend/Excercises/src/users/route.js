import { Router } from 'express';
import actions from './actions';

const userRoute = Router();

userRoute.post('/signup', actions.create);
userRoute.get('/users', actions.getModels);
userRoute.put('/users/:id', actions.update);

export default userRoute;