// an Implements to create Category
import { Category } from "../../../model/Category";

interface ICategoryRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: ICreateCategoryDTO): void;
}