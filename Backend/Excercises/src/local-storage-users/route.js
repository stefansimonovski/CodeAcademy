import { Router } from 'express';
import actions from './actions';

const userRoute = Router();

userRoute.get('/users', actions.list);
userRoute.get('/users/:id', actions.get);
userRoute.post('/users', actions.create);
userRoute.delete('/users/:id', actions.del);
userRoute.put('/users/:id', actions.update);

export default userRoute;
