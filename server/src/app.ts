import "express-async-errors";
import express, { Application, json } from "express";
import { PrismaClient } from "@prisma/client";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { router } from "./routers/index.router";
import cors from "cors";

export const app: Application = express();

export const prisma = new PrismaClient();

const ngrokPattern = /https:\/\/[a-zA-Z0-9-]+\.ngrok-free\.app(.*)/;
const regexPattern: RegExp = /.durvalmusicshop.*\.vercel\.app.*/;
const localUrl: string = "http://localhost:5173";

const corsOptions = {
  origin: regexPattern,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(json());

app.use("/", router);

app.use(handleErrors);
