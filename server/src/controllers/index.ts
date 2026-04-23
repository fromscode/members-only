import type { NextFunction, Request, Response } from "express";
import queries from "../db/queries.js";
import bcrypt from "bcrypt";
import generateToken from "../auth/generateToken.js";
import validators from "../middlewares/validators.js";

import { matchedData, validationResult } from "express-validator";
import BadRequest400 from "../errors/BadRequest400.js";

const login = [
  validators.validateUsernameOrEmail,
  validators.validatePassword,
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      next(new BadRequest400(result.array()));
      return;
    }

    const sanitizedBody = matchedData(req);

    const usernameOrEmail = sanitizedBody.username as string;
    const password = sanitizedBody.password as string;

    const user = await queries.getUserByUsernameOrEmail(usernameOrEmail);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({
        message: "Invalid credentials",
      });

      return;
    }

    const token = generateToken(user);

    res.status(200).json({
      message: "User logged in successfully",
      token: token,
    });
  },
];

const register = [
  validators.validateFirstname,
  validators.validateLastname,
  validators.validateUsername,
  validators.validateEmail,
  validators.validatePassword,
  validators.validateConfirmPassword,
  async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      next(new BadRequest400(result.array()));
      return;
    }

    const sanitizedBody = matchedData(req);

    const { firstname, lastname, username, email, password } = sanitizedBody;

    if (await queries.getUserByEmail(email)) {
      res.status(400).json({
        message: "Email already in use. Please login with this email instead",
      });
      return;
    }

    if (await queries.getUserByUsername(username)) {
      res.status(400).json({
        message: "Username already taken, try using a different username", // TODO : generate suggestions
      });
      return;
    }

    const hashedPass = await bcrypt.hash(password, 10);
    await queries.createUser(firstname, lastname, username, email, hashedPass);
    const userId = await queries.getUserId(username);
    const token = generateToken({ id: userId, role: "USER" });
    res.status(200).json({
      message: "User registered succesfully",
      token: token,
    });
  },
];

async function getMessages(req: Request, res: Response) {
  const messages = await queries.getAllMessages();
  res.json({
    messages,
  });
}

async function postMessage(req: Request, res: Response, next: NextFunction) {
  const author = (req as any).user.username;
  let { title, body, timeStamp } = req.body;

  if (!timeStamp) timeStamp = new Date();
  try {
    await queries.addMessage(author, title, body, timeStamp);

    res.json({
      message: "Message added sucessfully",
    });
  } catch (err) {
    next(err);
  }
}

async function getRole(req: Request, res: Response, next: NextFunction) {
  res.json({
    role: (req.user as any).role,
  });
}

const controller = {
  login,
  register,
  getMessages,
  postMessage,
  getRole,
};

export default controller;
