import express, { NextFunction, Request, Response } from 'express';
import { imageProcessDataAccess } from './../../data/image-processing.data';
import { NotFound, OK } from '../../shared/utils/http-response.util';

/* Image router to hold all modules route. */
export const imageRouter = express.Router();

/**
 * the relative route for image.
 * No need to start with slash '/'.
 */
export const imageRelativeRouter = 'images';

imageRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await imageProcessDataAccess.resizeImage(
      req.query.filename as string,
      parseInt(req.query.width as string),
      parseInt(req.query.height as string)
    );

    if (result.error) {
      next(result.error);
    } else if (result.isNotFound) {
      NotFound(res);
    } else if (result.validationErrors && result.validationErrors.length) {
      res.status(400).send(result.validationErrors[0].detail);
    } else if (result.data) {
      OK(res, result.data);
    }
  } catch (error) {
    next(error);
  }
});
