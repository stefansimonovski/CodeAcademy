import { Router } from 'express';
import actions from './actions';

const commentRoute = Router();

commentRoute.post('/comments', actions.postComment);

export default commentRoute;
