import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { IndexRoutes } from "./index.routes";
import { specificationRoutes } from "./specifcations.routes";

const router = Router()

router.use("/", IndexRoutes);
router.use("/categories",categoriesRoutes);
router.use("/specifications", specificationRoutes);

export { router }