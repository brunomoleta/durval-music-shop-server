import "express-async-errors";
import express, {Application, json} from "express";
import {PrismaClient} from "@prisma/client";
import {handleErrors} from "./middlewares/handleErrors.middleware";
import {router} from "./routers/index.router";
import cors from "cors";

export const app: Application = express();

export const prisma = new PrismaClient();

const ngrokPattern = /https:\/\/[a-zA-Z0-9-]+\.ngrok-free\.app(.*)/;
const vercel: RegExp = /.durval-music-shop.*\.vercel\.app.*/;
const netlify: RegExp = /.durvalmusicshop.*\.netlify\.app.*/;
const localUrl: string = "http://localhost:5173";
const acceptedValuesArray = [netlify, localUrl, ngrokPattern, vercel]

const corsOptions = {
    origin: acceptedValuesArray,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(json());

app.use("/", router);

app.use(handleErrors);
