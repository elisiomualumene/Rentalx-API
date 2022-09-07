import { CategoryRepository } from "../../repositories/Category/CategoriesRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

const CategoriesRepository = CategoryRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(CategoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export {createCategoryController};