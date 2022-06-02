import express from 'express';
const router = express.Router();
import gameRouter from './game';

router.use('/game', gameRouter);

export default router;