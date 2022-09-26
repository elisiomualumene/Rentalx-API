import "reflect-metadata"

import express, { json } from "express"
import dotenv from "dotenv"
import { router } from "./Routes";
import swaggerUI from "swagger-ui-express"
import swaggerFile from "./swagger.json"



const app = express();
dotenv.config();
app.use(json());

const port = process.env.PORT_SERVER || 3030;

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(router)

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});
