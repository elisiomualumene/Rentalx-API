import { Category } from "../../entities/Category"
import { ICategoryRepository } from "./implementation/ICategoryRepository";
import {getRepository, Repository} from "typeorm"


class CategoryRepository implements ICategoryRepository{
    // proivate category: Category[];
    private repository: Repository<Category>;

    //Singleton Pattern 
   // private static INSTANCE: ICategoryRepository
    //with Pattern constructor neew to be private

    //private
     constructor() {
        this.repository = getRepository(Category);
        //this.cateogry = [];
    }
    // now i verify if already exists a INSTANCE, if already have an INSTANCE return them
    // public static getInstance(): ICategoryRepository {
    //     if(!CategoryRepository.INSTANCE){
    //         CategoryRepository.INSTANCE = new CategoryRepository();
    //     }
    //     return CategoryRepository.INSTANCE;
    // }

    async create({name,description}: ICreateCategoryDTO): Promise<void> {
        //const category = new Category();
        // a method to put variables to an object
        // Object.assign(category, {
        //     name,
        //     description,
        //     created_at: new Date()
        // });

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
        const category = await this.repository.findOne({ name })

        return category
    };
};

export { CategoryRepository }