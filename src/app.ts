import express, { Application } from 'express';
import * as server from './server';

const app: Application = express();

server.setupServer(app);
server.startServer(app);
