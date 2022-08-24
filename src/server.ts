import express, { json } from "express"
import { categoriesRoutes } from "./Routes/categories.routes";
import { IndexRoutes } from "./Routes/index.routes"
import { specificationRoutes } from "./Routes/specifcations.routes";


const app = express();

app.use(json());

const port = 3030;

app.use("/", IndexRoutes);
app.use("/categories",categoriesRoutes);
app.use("/specifications", specificationRoutes);
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});