import type { RowDataPacket } from "mysql2";
import pool from "./pool.js";

export async function getUserByUsernameOrEmail(usernameOrEmail: string) {
  let [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * from users WHERE username = ?;",
    [usernameOrEmail],
  );

  if (!rows.length) {
    [rows] = await pool.execute<RowDataPacket[]>({
      sql: "SELECT * from users WHERE email = ?;",
      values: [usernameOrEmail],
    });
  }

  return rows[0];
}

export async function getUserByUsername(username: string) {
  let [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * from users WHERE username = ?;",
    [username],
  );

  return rows[0];
}

export async function getUserByEmail(email: string) {
  let [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * from users WHERE email = ?;",
    [email],
  );

  return rows[0];
}

export async function createUser(
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  hashedPass: string,
) {
  await pool.query(
    'INSERT INTO users (firstname, lastname, username, email, password, role) VALUES (?, ?, ?, ?, ?, "USER")',
    [firstname, lastname, username, email, hashedPass],
  );
}

async function getUserId(userId: number) {
  return (
    await pool.execute<RowDataPacket[]>("SELECT * FROM users WHERE id = ?", [
      userId,
    ])
  )[0][0];
}

async function getAllMessages() {
  return (await pool.execute<RowDataPacket[]>("SELECT * FROM messages;"))[0];
}

async function addMessage(
  author: string,
  title: string,
  body: string,
  timeStamp: string,
) {
  await pool.query(
    "INSERT INTO messages(author, title, body, timeStamp) values (?, ?, ?, ?);",
    [author, title, body, timeStamp],
  );
}

async function deletePostVerify(postId: number, author: string) {
  return await pool.query(
    `UPDATE messages SET 
      title = '', 
      body = '', 
      isDeleted = 1, 
      deletedBy = ?
      where id = ? AND author = ?;`,
    [author, postId, author],
  );
}


async function upgradeRole(userId: number) {
  await pool.query("Update users SET role = ? where id = ?", ["MEMBER", userId]);
}

export default {
  getUserByUsernameOrEmail,
  getUserByUsername,
  getUserByEmail,
  createUser,
  getUserId,
  getAllMessages,
  addMessage,
  deletePostVerify,
  upgradeRole
};
