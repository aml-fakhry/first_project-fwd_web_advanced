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

imageRouter.get('/re', async (req, res) => {
  const result = await imageProcessDataAccess.resize(
    req.query.filename as string,
    parseInt(req.query.width as string),
    parseInt(req.query.height as string)
  );
  result ? OK(res, `/assets/full/${req.query.filename}.jpg`) : NotFound(res);
});
