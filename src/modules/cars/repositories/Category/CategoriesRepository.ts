import { Category } from "../../model/Category"
import { ICategoryRepository } from "./implementation/ICategoryRepository";

class CategoryRepository implements ICategoryRepository{
    private Categories: Category[];

    //Singleton Pattern 
    private static INSTANCE: ICategoryRepository
    //with Pattern constructor neew to be private
    private constructor() {
        this.Categories = [];
    }
    // now i verify if already exists a INSTANCE, if already have an INSTANCE return them
    public static getInstance(): ICategoryRepository {
        if(!CategoryRepository.INSTANCE){
            CategoryRepository.INSTANCE = new CategoryRepository();
        }
        return CategoryRepository.INSTANCE;
    }

    create({name,description}: ICreateCategoryDTO) {
    const category = new Category();
    // a method to put variables to an object
    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    });

    this.Categories.push(category);
    };

    list(): Category[] {
        return this.Categories
    };

    findByName(name: string): Category {
        const category = this.Categories.find(Category => Category.name === name);

        return category
    };
};

export { CategoryRepository }