import cors from 'cors';
import express, { Application } from 'express';

import { testRelativeRouter, testRouter } from '../routes';
import { Logger } from '../shared';
import { Config } from './../../config/custom-environment-variables';
import { errorHandler } from './../shared/middleware/error-handler.middleware';

const port = 3000;

function setRequestOptions(app: Application) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}

function registerRouter(app: Application) {
  const apiBaseRoute = '/api/';

  app.use(apiBaseRoute + testRelativeRouter, testRouter);
}

export function setupServer(app: Application) {
  setRequestOptions(app);
  registerRouter(app);
  app.use(errorHandler);
}

export function startServer(app: Application) {
  app.listen(port, () => {
    Logger.info(
      `Server is running now at http://localhost:${Config.APP_PORT}, under the ${process.env.NODE_ENV} environment`,
      null,
      true
    );
  });
}
