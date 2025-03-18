import {Router, Request, Response} from 'express';
import {errorMiddleware} from '../middleware/errorMiddleware';
import { appRouter } from './app';

export const router = Router();

router.use('/app', appRouter);

router.use(errorMiddleware);
router.use((req: Request, res: Response) => {
    res.status(404).send('<h1>Page not found</h1>');
});
