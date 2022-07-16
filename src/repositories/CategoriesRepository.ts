import { Category } from "../model/Category"

// DTO = Data Transfer Object

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoryRepository {
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