import pool from "./pool.js";

const createUsers = `
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255)
);
`;

const createMessages = `
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  author VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  body VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  isDeleted BOOLEAN DEFAULT FALSE,
  deletedBy VARCHAR(255) DEFAULT NULL,

  CONSTRAINT fk_author 
    FOREIGN KEY (author) REFERENCES users(username),

  CONSTRAINT fk_deletedBy
    FOREIGN KEY (deletedBy) REFERENCES users(username)
);
`;

await pool.query(createUsers);
await pool.query(createMessages);

pool.end();
