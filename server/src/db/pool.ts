import mysql from "mysql2/promise";

export default await mysql.createConnection(
  "mysql://shadeflick:password@localhost:3307/members_only",
);
