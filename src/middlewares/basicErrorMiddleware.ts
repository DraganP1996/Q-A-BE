import { ResponseError } from "../models/errors";
import { NextFunction, Request, Response } from 'express';

const basicErrorMiddleware = (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.send({ error: err.message });
}

export default basicErrorMiddleware;