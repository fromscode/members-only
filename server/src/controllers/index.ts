import type { Request, Response } from "express";

function login(req: Request, res: Response) {
  res.send("Hello from server");
}
function register(req: Request, res: Response) {
  res.send("Hello from server");
}

const controller = {
  login,
  register,
};

export default controller;
