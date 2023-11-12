import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsConfig } from "./config.js";

const app = express();

// middlware config
app.use(
  cors({
    origin: corsConfig.origin,
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// 404 handler
app.use((req, res, next) => {
  res.status(404).send("Not found");
});

export default app;
