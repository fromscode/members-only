export default class ServerError500 extends Error {
  status: number;
  constructor() {
    super();
    this.message = "Internal Server Error";
    this.status = 500;
  }
}
