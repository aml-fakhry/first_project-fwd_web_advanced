import cors from 'cors';
import express, { Application } from 'express';

import { testRelativeRouter, testRouter } from '../routes';
import { Config } from './../../config/custom-environment-variables';

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
}

export function startServer(app: Application) {
  app.listen(port, () => {
    console.log(
      `Server is running now at http://localhost:${Config.APP_PORT}, under the ${process.env.NODE_ENV} environment`
    );
  });
}
