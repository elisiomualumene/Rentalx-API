import { Category } from "../model/Category"
import { ICategoryRepository } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository{
    private Categories: Category[];

    constructor() {
        this.Categories = [];
    }

    create({name,description}: ICreateCategoryDTO): void {
    const category = new Category();
    
    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    })

    this.Categories.push(category);
    }

    list(): Category[] {
        return this.Categories
    }

    findByName(name: string): Category {
        const category = this.Categories.find(Category => Category.name === name);

        return category
    }
}

export { CategoryRepository }