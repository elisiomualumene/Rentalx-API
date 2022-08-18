import { Router } from "express"
import  { CategoryRepository }  from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";


const categoriesRoutes = Router();
const repositoryCategories = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    
    const createCategoryService = new CreateCategoryService(repositoryCategories);

    createCategoryService.execute({name, description});

    return response.status(201).json({status: true, message: "category was added!"});
})

categoriesRoutes.get("/", (request,response) => {
    const all = repositoryCategories.list();

    return response.json(all);
})

export {categoriesRoutes};