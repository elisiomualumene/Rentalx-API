import { CategoryRepository } from "../../repositories/Category/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export default () => {
    //const categoryRepository = CategoryRepository.getInstance();
    const categoryRepository = new CategoryRepository;
    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
    const importCategoryControlller = new ImportCategoryController(importCategoryUseCase);

    return importCategoryControlller;
}


// export {importCategoryControlller};