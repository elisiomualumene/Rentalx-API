import "reflect-metadata"

import "./shared/container";

import {AppDataSource} from "./database/index"

import express, { json } from "express"

import dotenv from "dotenv"

import { router } from "./Routes";

import swaggerUI from "swagger-ui-express"
import swaggerFile from "./swagger.json"

import "./database"

const app = express();
AppDataSource.initialize();

dotenv.config();
app.use(json());


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(router)


export { app };
