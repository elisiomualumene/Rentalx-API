import { Router } from "express"
import  createCategoryController  from "../modules/cars/useCases/createCategories";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import multer from "multer";
import  importCategoryControlller  from "../modules/cars/useCases/importCategory";

const upload = multer({
    dest: "./tmp"
});

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {return createCategoryController().handle(request, response)})

categoriesRoutes.get("/", (request, response) => {return listCategoriesController.handle(request, response)})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {return importCategoryControlller().handle(request, response)})

export {categoriesRoutes};