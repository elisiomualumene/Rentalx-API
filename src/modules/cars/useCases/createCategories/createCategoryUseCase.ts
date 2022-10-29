import { ICategoryRepository } from "../../repositories/Category/implementation/ICategoryRepository";

class CreateCategoryUseCase{

    constructor(private repositoryCategories: ICategoryRepository){}

    async execute({ name, description }: IRequest): Promise<void>{
        const categoryAlreadyExists = await this.repositoryCategories.findByName(name);

        if(categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }

        this.repositoryCategories.create({name, description});
    };
};

export { CreateCategoryUseCase };