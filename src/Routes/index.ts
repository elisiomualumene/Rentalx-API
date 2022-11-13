import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { IndexRoutes } from "./index.routes";
import { specificationRoutes } from "./specifcations.routes";
import { userRoutes } from "./user.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router()

router.use("/", IndexRoutes);
router.use("/categories",categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/user", userRoutes)
router.use(authenticateRoutes)

export { router }