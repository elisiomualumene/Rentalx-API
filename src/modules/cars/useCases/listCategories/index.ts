import { CategoryRepository } from "../../repositories/Category/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./listCategoryUseCase";


//const categoryRepository = CategoryRepository.getInstance();
const categoryRepository = new CategoryRepository;
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController};
