import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/Category/implementation/ICategoryRepository";

class ListCategoriesUseCase{
    constructor(private repositoryCategories: ICategoryRepository){}

    async execute(): Promise<Category[]> {
       const categories = await this.repositoryCategories.list();

       return categories;
    };
}

export { ListCategoriesUseCase }