import { Category } from "../../entities/Category"
import { ICategoryRepository } from "./implementation/ICategoryRepository";
import { Repository } from "typeorm"
import { AppDataSource } from '../../../../database/index';
import { ICreateCategoryDTO } from "../../types/repositories";



class CategoryRepository implements ICategoryRepository{
    private repository: Repository<Category>;

    constructor() {
        this.repository = AppDataSource.getRepository(Category);  
    }
    
    async create({name,description}: ICreateCategoryDTO): Promise<void> {
 

        const category = this.repository.create({
            description,
            name
        })

        await this.repository.save(category);
    };

    async list(): Promise<Category[]> {
        const Categories = await this.repository.find();
        return Categories
    };

    async findByName(name: string): Promise<any> {
        // SQL => select * from Category where name = "name" limit 1
        const category = await this.repository.findOneBy({ name })

        return category
    };
};

export { CategoryRepository }