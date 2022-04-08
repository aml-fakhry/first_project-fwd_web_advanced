import express, { Request, Response } from 'express';

export const testRouter = express.Router();

export const testRelativeRouter = 'test';

testRouter.get('', (req: Request, res: Response) => {
  res.send('Hallo, world');
});
