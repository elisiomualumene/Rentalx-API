// an Implements to create Category
import { Category } from "../../../infraestructure/typeorm/entities/Category";
import { ICreateCategoryDTO } from "../../../types/repositories";

interface ICategoryRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({name, description}: ICreateCategoryDTO): Promise<void>;
}


export { ICategoryRepository }