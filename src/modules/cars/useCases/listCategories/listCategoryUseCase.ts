import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/Category/implementation/ICategoryRepository";

class ListCategoriesUseCase{
    constructor(private repositoryCategories: ICategoryRepository){}

    execute(): Category[]{
       const categories = this.repositoryCategories.list();

       return categories;
    };
}

export { ListCategoriesUseCase }