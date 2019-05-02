import { Router } from 'express';

import auth from '../auth/index';
import users from '../users/index';
import students from '../students/index';
import posts from '../posts/index';
import comments from '../comments/index';

const indexRouter = Router();

indexRouter.use('/auth', auth.route);
indexRouter.use(users.route);
indexRouter.use(students.route);
indexRouter.use(posts.route);
indexRouter.use(comments.route);

export default indexRouter;