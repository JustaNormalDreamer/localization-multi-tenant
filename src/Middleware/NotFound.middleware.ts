/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers';
import { Request, Response, NextFunction } from 'express';
import { EntityNotFoundError } from 'typeorm';
import { __trans } from '../Localization/Translate';
import { ErrorResponse } from '../ErrorResponse';

@Middleware({ type: 'after' })
export class NotFoundMiddleware implements ExpressErrorMiddlewareInterface {
  async error(error: any, request: Request, response: Response, next: NextFunction) {
    if (error instanceof EntityNotFoundError) {
      const resBody = new ErrorResponse('ENTITY_404', await __trans('ENTITY_404'));
      return response.status(404).send(resBody);
    }

    next();
  }
}
