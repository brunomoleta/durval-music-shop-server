import "express-async-errors";
import express, {Application, json} from "express";
import {PrismaClient} from "@prisma/client";
import {handleErrors} from "./middlewares/handleErrors.middleware";
import {router} from "./routers/index.router";
import cors from "cors";

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../openapi.json';

export const app: Application = express();

export const prisma = new PrismaClient();

const ngrokPattern = /https:\/\/[a-zA-Z0-9-]+\.ngrok-free\.app(.*)/;
const vercel: RegExp = /.durval-music-shop.*\.vercel\.app.*/;
const localUrl: string = "http://localhost:5173";
const acceptedValuesArray = [localUrl, ngrokPattern, vercel]

const corsOptions = {
    origin: acceptedValuesArray,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(json());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use("/", router);

app.use(handleErrors);
