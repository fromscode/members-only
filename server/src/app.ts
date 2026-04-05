import express, { type Request, type Response } from "express";
import router from "./routes/index.js";
import errorHandler from "./errors/errorHandler.js";
import notFound from "./middlewares/notFound.js";
const app = express();

const PORT = process.env.port;

app.use(express.json());

app.use("/", router);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server up and running at port ${PORT}`);
});
