import type { Request, Response } from "express";
import queries from "../db/queries.js";
import bcrypt from "bcrypt";

async function login(req: Request, res: Response) {
  const usernameOrEmail = req.body.username as string;
  const password = req.body.password as string;

  const user = await queries.getUserByUsernameOrEmail(usernameOrEmail);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json({
      message: "Invalid username or password",
    });

    return;
  }

  res.status(200).json({
    message: "User logged in successfully",
    token: "some token", // TODO generate token
  });
}

async function register(req: Request, res: Response) {
  const [firstname, lastname, username, email, password] = req.body;

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
  res.status(200).json({
    message: "User registered succesfully",
    token: "some token", // TODO generate token
  });
}

const controller = {
  login,
  register,
};

export default controller;
