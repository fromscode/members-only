export default class NotFound404 extends Error {
  status: number;
  constructor() {
    super();
    this.message = "The requested resource is unavailable";
    this.status = 404;
  }
}
