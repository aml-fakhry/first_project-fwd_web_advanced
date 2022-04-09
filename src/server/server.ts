import cors from 'cors';
import express, { Application } from 'express';

import { imageRelativeRouter, imageRouter } from '../routes';
import { Logger } from '../shared';
import { Config } from './../../config/custom-environment-variables';
import { errorHandler } from './../shared/middleware/error-handler.middleware';

function setRequestOptions(app: Application) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}

function registerRouter(app: Application) {
  /* That is the base route "path". */
  const apiBaseRoute = '/api/';

  app.use(apiBaseRoute + imageRelativeRouter, imageRouter);
}

export function setupServer(app: Application) {
  setRequestOptions(app);
  registerRouter(app);
  app.use(errorHandler);
}

export function startServer(app: Application) {
  app.listen(Config.APP_PORT, () => {
    Logger.info(
      `Server is running now at http://localhost:${Config.APP_PORT}, under the ${process.env.NODE_ENV} environment`,
      null,
      true
    );
  });
}
