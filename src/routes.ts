import express from 'express';
import authMiddleware from './middlewares/Auth';

import ToolsController from './controllers/ToolsController';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

const router = express.Router();

router.get("/list/tools",authMiddleware, ToolsController.index);
router.post('/tools/store',authMiddleware, ToolsController.store);
router.get('/tools',authMiddleware, ToolsController.search);
router.delete("/tools/:id",authMiddleware,  ToolsController.delete);

router.post("/user",UserController.store);
router.get('/user/index',authMiddleware ,UserController.index);

router.post('/session', SessionController.store);

export default router;