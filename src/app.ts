import express from 'express';

import { promises as fsPromises } from 'fs';
// or
import { promises as fs } from 'fs';

import { testRouter } from './routes';

const app = express();
const port = 3000;

app.use('/api', testRouter);

app.listen(port, () => {
  console.log(`Server is running now at http://localhost:${port}`);
});
