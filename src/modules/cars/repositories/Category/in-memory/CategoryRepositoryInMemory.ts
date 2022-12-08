import { Category } from "../../../infraestructure/typeorm/entities/Category";
import { ICreateCategoryDTO } from "../../../types/repositories";
import { ICategoryRepository } from "../implementation/ICategoryRepository";


class CategoryRepositoryInMemory implements ICategoryRepository{
    private categories : Category[] = []
    
    async findByName(name: string): Promise<Category> {
        const category: any = this.categories.find((category) => category.name === name);
        return category;
    }
    async list(): Promise<Category[]> {
        const all = this.categories
        return all
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();

        Object.assign(category, {name, description});

        this.categories.push(category)
    }

}

 
export {CategoryRepositoryInMemory }