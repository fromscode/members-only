import express, { type Request, type Response } from "express";
const app = express();

const PORT = process.env.port;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from server");
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server up and running at port ${PORT}`);
});
