import {container} from 'tsyringe';

// Category
import {ICategoryRepository} from '../../modules/cars/repositories/Category/implementation/ICategoryRepository';
import {CategoryRepository} from '../../modules/cars/infraestructure/typeorm/repositories/Category/CategoriesRepository';

// Specifications
import {ISpecificationRepository} from '../../modules/cars/repositories/Specification/implementation/ISpecificationRepository';
import {SpecificationRepository} from '../../modules/cars/infraestructure/typeorm/repositories/Specification/SpecificationRepository';
import {IUserRepository} from '../../modules/accounts/repositories/User/IUserRepository';
import {UserRepository} from '../../modules/accounts/repositories/User/implementation/UserRepository';

import {ICarRepository} from '@modules/cars/repositories/Car/ICarRepository';
import {CarRepository} from '../../modules/cars/infraestructure/typeorm/repositories/Cars/CarRepositoryImp';

// interface categoriesRepository
container.registerSingleton<ICategoryRepository>(
    'CategoryRepository',
    CategoryRepository,
);

// interface specificationRepository
container.registerSingleton<ISpecificationRepository>(
    'RepositorySpecification',
    SpecificationRepository,
);


container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRepository,
);

container.registerSingleton<ICarRepository>(
    'CarRepository',
    CarRepository,
);
