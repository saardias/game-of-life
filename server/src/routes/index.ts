import express from 'express';
const router = express.Router();

router.use('/health', (req, res, next) => {
    res.send({ status: 'ok' });
});

export default router;