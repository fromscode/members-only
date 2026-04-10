import type { ValidationError } from "express-validator";

export default class BadRequest400 extends Error {
  status: number;
  errorsArray: String[];
  constructor(errorsArray: ValidationError[]) {
    super();
    const messageBuilder = [];
    this.message = "Invalid / Incomplete data";
    this.errorsArray = [];
    for (const error of errorsArray) this.errorsArray.push(error?.msg)
    this.status = 400;
  }
}
