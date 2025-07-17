import express from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from "@michaelil/common";

const app = express();

app.set("trust proxy", true); // Trust the first proxy
app.use(bodyParser.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test", // Use secure cookies in production
  })
);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
