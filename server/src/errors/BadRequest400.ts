import type { ValidationError } from "express-validator";

export default class BadRequest400 extends Error {
  status: number;
  errorsArray: String[];
  constructor(errorsArray: ValidationError[]) {
    super();
    this.status = 400;
    this.errorsArray = [];
    this.message = "Invalid / Incomplete data";
    for (const error of errorsArray) this.errorsArray.push(error?.msg)
  }
}
