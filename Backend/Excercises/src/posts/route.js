import { Router } from 'express';
import actions from './actions';

const postRoute = Router();

postRoute.post('/posts', actions.addPost);
postRoute.get('/posts', actions.getModels);

export default postRoute;
