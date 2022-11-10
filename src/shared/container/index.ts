import { container } from "tsyringe"

// Category
import { ICategoryRepository } from "../../modules/cars/repositories/Category/implementation/ICategoryRepository"
import { CategoryRepository } from "../../modules/cars/repositories/Category/CategoriesRepository"

// Specifications
import {ISpecificationRepository} from "../../modules/cars/repositories/Specification/implementation/ISpecificationRepository"
import { SpecificationRepository } from "../../modules/cars/repositories/Specification/SpecificationRepository"

// interface categoriesRepository
container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
)

//interface specificationRepository
container.registerSingleton<ISpecificationRepository>(
    "RepositorySpecification",
    SpecificationRepository
)