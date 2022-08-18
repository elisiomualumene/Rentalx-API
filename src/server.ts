import express, { json } from "express"
import { categoriesRoutes } from "./Routes/categories.routes";
import { IndexRoutes } from "./Routes/index.routes"


const app = express();

app.use(json());

const port = 3030;

app.use("/", IndexRoutes);
app.use("/categories",categoriesRoutes);

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});