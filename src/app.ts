import express, { Application } from 'express';
import * as server from './server';

export const app: Application = express();

// export const myFunc = (num: number): number => {
//   return num * num;
// };

/* Set app root directory name */
export const appRootDir = __dirname;

/**
 * Setup express server.
 * Start express server after all are done.
 */
server.setupServer(app);
server.startServer(app);
