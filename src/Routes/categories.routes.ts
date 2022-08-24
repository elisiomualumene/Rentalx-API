import { Router } from "express"
import  { CategoryRepository }  from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";


const categoriesRoutes = Router();
const repositoryCategories = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {return createCategoryController.handle(request, response)})

categoriesRoutes.get("/", (request,response) => {
    const all = repositoryCategories.list();

    return response.json(all);
})

export {categoriesRoutes};