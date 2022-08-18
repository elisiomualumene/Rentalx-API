import { CategoryRepository } from "../repositories/CategoriesRepository";

class CreateCategoryService{

    constructor(private repositoryCategories: CategoryRepository){}

    execute({ name, description }: IRequest): void{
        const cateogryAlreadyExists = this.repositoryCategories.findByName(name);

        if(cateogryAlreadyExists) {
            throw new Error("Category Already exists!")
        }

        this.repositoryCategories.create({name, description})
    }
}

export { CreateCategoryService };