import express, { Application } from 'express';
import * as server from './server';

const app: Application = express();

/* Set app root directory name */
export const appRootDir = __dirname;

/**
 * Setup express server.
 * Start express server after all are done.
 */
server.setupServer(app);
server.startServer(app);
