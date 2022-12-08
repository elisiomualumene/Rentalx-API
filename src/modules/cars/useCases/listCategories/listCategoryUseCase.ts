import { Category } from "../../infraestructure/typeorm/entities/Category";
import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/Category/implementation/ICategoryRepository";

@injectable()
class ListCategoriesUseCase{
    constructor(
        @inject("CategoryRepository")
        private repositoryCategories: ICategoryRepository){}

    async execute(): Promise<Category[]> {
       const categories = await this.repositoryCategories.list();

       return categories;
    };
}

export { ListCategoriesUseCase }