import express from 'express';
import gptRouter from './gpt/gpt-router';

const router = express.Router();

router.use('/gpt', gptRouter);

export default router;
