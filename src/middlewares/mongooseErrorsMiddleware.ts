import { ResponseError } from "../models/errors";
import { NextFunction, Request, Response } from 'express';

/**
 * Handle mongoose validation errors
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 */
const mongooseErrorsMiddleware = (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
  if (err && err.name === 'ValidationError')
      err.status = 422;
  next(err);
}

export default mongooseErrorsMiddleware;