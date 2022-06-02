import express from 'express';
const router = express.Router();
import v1Routers from './v1';

router.use('/v1', v1Routers);

export default router;