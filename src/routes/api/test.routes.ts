import express, { Request, Response } from 'express';

export const testRouter = express.Router();

export const testRelativeRouter = express.Router();

testRouter.get('/', (req: Request, res: Response) => {
  res.send('Hallow world');
});
