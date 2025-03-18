import {Router} from 'express';
import ScrapAppRouter from './scrap.routes';


export const appRouter = Router();

appRouter.use('/scraping', ScrapAppRouter);
