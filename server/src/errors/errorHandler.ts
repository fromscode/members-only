import type { NextFunction, Request, Response } from "express";
import type { HTTPError } from "../types.js";

export default function (
  err: HTTPError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(err.status).json({
    message: err.message,
  });
}
