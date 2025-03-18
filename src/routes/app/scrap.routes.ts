import {Router} from 'express';
import {validatorJWT} from '../../middleware/validator-jwt.middlewares';
import { asyncMiddleware } from '../../middleware/asyncMiddleware';
import { ScrapController } from '../../controllers/scrap.controller';

const ScrapAppRouter = Router();

ScrapAppRouter.get('/', asyncMiddleware(ScrapController.getInfo3mtAutoweb));

export default ScrapAppRouter;