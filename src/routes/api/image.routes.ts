import express, { Request, Response } from 'express';

/* Image router to hold all modules route. */
export const imageRouter = express.Router();

/**
 * the relative route for image.
 * No need to start with slash '/'.
 */
export const imageRelativeRouter = 'images';

imageRouter.get('', (req: Request, res: Response) => {
  res.send('Hallo, world');
});
