import express from 'express';
import ToolsController from './controllers/ToolsController';

const router = express.Router();

router.get("/list/tools", ToolsController.index);
router.post('/tools/store', ToolsController.store);
router.get('/tools', ToolsController.search);
router.delete("/tools/:id",  ToolsController.delete);



export default router;