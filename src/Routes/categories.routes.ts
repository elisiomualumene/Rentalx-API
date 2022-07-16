import { Router } from "express"
import  { CategoryRepository }  from "../repositories/CategoriesRepository";


const categoriesRoutes = Router();
const repositoryCategories = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const cateogryAlreadyExists = repositoryCategories.findByName(name);

    if(cateogryAlreadyExists) {
        return response.status(400).json({error: "category already exists"})
    }

    repositoryCategories.create({name, description})

    return response.status(201).json({status: true, message: "category was added!"});
})

categoriesRoutes.get("/", (request,response) => {
    const all = repositoryCategories.list();

    return response.json(all);
})

export {categoriesRoutes};