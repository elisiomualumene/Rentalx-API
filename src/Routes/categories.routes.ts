import { Router } from "express"
import { CreateCategoryController } from "../modules/cars/useCases/createCategories/createCategoryController";
// import  createCategoryController  from "../modules/cars/useCases/createCategories";
//import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";
import multer from "multer";
//import  importCategoryControlller  from "../modules/cars/useCases/importCategory";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";

const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

const categoriesRoutes = Router();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle)

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle)

export {categoriesRoutes};