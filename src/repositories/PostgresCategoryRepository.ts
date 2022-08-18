import { Category } from "../model/Category";
import { ICategoryRepository } from "./ICategoryRepository";

 class PostgresCategoryRepository implements ICategoryRepository {
     findByName(name: string): Category {
        console.log(name);
        return null
     }
     list(): Category[] {
        return null;
     }
     create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
     }
    
 }

 export {PostgresCategoryRepository};