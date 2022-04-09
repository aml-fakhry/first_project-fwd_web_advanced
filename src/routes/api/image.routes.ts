import express, { Request, Response } from 'express';
import { imageProcessDataAccess } from './../../data/image-processing.data';
import { NotFound, OK } from '../../shared/utils/http-response.util';

/* Image router to hold all modules route. */
export const imageRouter = express.Router();

/**
 * the relative route for image.
 * No need to start with slash '/'.
 */
export const imageRelativeRouter = 'images';

imageRouter.get('', async (req: Request, res: Response) => {
  const result = await imageProcessDataAccess.resize(req.query.filename as string);
  if (result) {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.render(`<img src="http://localhost:3000+${req.query.filename}" alt="" sizes="" srcset="">`);
  }
});

imageRouter.get('/re', async (req, res) => {
  const result = await imageProcessDataAccess.resize(req.query.filename as string);
  result ? OK(res, `/assets/full/${req.query.filename}.jpg`) : NotFound(res);
});
