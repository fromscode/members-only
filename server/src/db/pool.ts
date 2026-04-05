import mysql from "mysql2/promise";

export default await mysql.createConnection(process.env.db_string as string);
