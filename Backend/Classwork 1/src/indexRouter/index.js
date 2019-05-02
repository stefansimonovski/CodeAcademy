import { Router } from 'express';
import users from '../users/index';

const indexRouter = Router();

indexRouter.use(users.route);

export default indexRouter;