import { CategoryRepository } from "../../repositories/Category/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryControlller = new ImportCategoryController(importCategoryUseCase);

export {importCategoryControlller};