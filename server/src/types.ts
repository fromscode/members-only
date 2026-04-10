import type { ValidationError } from "express-validator";

export type HTTPError = Error & {
  status: number;
  errorsArray?: String[]
};
