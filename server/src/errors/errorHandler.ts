import type { NextFunction, Request, Response } from "express";
import type { HTTPError } from "../types.js";

export default function (
  err: HTTPError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const status = err.status || 500;
  const message = status == 500 ? "Internal Server Error" : err.message;
  if (status == 500) console.error(err);
  res.status(status).json({
    message,
  });
}
