import 'reflect-metadata';

import '../../container';

import {AppDataSource} from '../database/index';
import {NextFunction, Request, Response} from 'express';
import 'express-async-errors';
import express, {json} from 'express';

import dotenv from 'dotenv';

import {router} from './Routes';

import swaggerUI from 'swagger-ui-express';
import swaggerFile from '../../../swagger.json';

import '../database';
import {AppError} from '../../errors/AppError';

const app = express();
AppDataSource.initialize();

dotenv.config();
app.use(json());


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use((err: IExceptionDTO, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'errror',
    message: `Internal Server Errror - ${err.message}`,
  });
});


export {app};
