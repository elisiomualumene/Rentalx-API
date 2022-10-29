// an Implements to create Category
import { Category } from "../../../entities/Category";

interface ICategoryRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({name, description}: ICreateCategoryDTO): Promise<void>;
}