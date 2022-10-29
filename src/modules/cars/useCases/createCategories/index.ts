import { CategoryRepository } from "../../repositories/Category/CategoriesRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

export default (): CreateCategoryController => {

    //const CategoriesRepository = CategoryRepository.getInstance();
    const CategoriesRepository = new CategoryRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(CategoriesRepository);

    const createCategoryController = new CreateCategoryController(createCategoryUseCase);

    return createCategoryController;

}

