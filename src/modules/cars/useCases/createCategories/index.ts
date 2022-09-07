import { CategoryRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

const CategoriesRepository = new CategoryRepository()
const createCategoryUseCase = new CreateCategoryUseCase(CategoriesRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export {createCategoryController}