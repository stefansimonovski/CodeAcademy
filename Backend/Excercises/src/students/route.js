import { Router } from 'express';
import actions from './actions';

const studentRouter = Router();

studentRouter.get('/students', actions.list);
studentRouter.get('/students/:id', actions.get);
studentRouter.post('/students', actions.create);
studentRouter.put('/students/:id', actions.update);
studentRouter.delete('/students/:id', actions.del);

export default studentRouter;
