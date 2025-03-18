import {Request, Response} from 'express';
import {customeResponse} from '../common/customResponses';
import {scraping} from '../plugins/scraping';

export class ScrapController {
    static async getInfo3mtAutoweb(req: Request, res: Response): Promise<void> {
        const cars = await scraping();
        customeResponse({res, status: 200, ok: true, msg: 'Success', data: cars});
    }
}
