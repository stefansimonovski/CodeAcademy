import { Router } from 'express';
import users from '../users';

const { actions } = users;

const authRouter = Router();

authRouter.post('/login', actions.login);
authRouter.put('/reset-password', actions.resetPassword);
authRouter.post('/forgotPassword', actions.forgotPassword);
authRouter.get('/reset', actions.reset);

export default authRouter;
