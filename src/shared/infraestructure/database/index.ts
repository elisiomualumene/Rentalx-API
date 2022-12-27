import {Category} from '../../../modules/cars/infraestructure/typeorm/entities/Category';
import {Specification} from '../../../modules/cars/infraestructure/typeorm/entities/Specification';
import {User} from '../../../modules/accounts/infraestructure/typeorm/entities/User';
import {Car} from '../../../modules/cars/infraestructure/typeorm/entities/Car';

import {CreateCategory1664470153748 as CategoryMigration} from './migration/1664470153748-CreateCategory';
import {createSpecification1667240325686 as SpecificationMigration} from './migration/1667240325686-CreateSpecifications';
import {CreateUsers1668178211212 as UserMigration} from './migration/1668178211212-CreateUsers';
import {AlterUserAddAvatar1668599236908 as AvatarMigration} from './migration/1668599236908-AlterUserAddAvatar';
import {CreateCars1671819999593 as CarsMigration} from './migration/1671819999593-CreateCars';
import { InsertUserValues1672062931180 as IsertUserValues } from './migration/1672062931180-InsertUserValues';
import { CreateSpecificationCars1672078550852 as CreateSpecificationCar } from './migration/1672078550852-CreateSpecificationCars';

import {DataSource} from 'typeorm';

const Entity = [Category, Specification, User, Car];

const Migrations = [
  CategoryMigration, 
  SpecificationMigration, 
  UserMigration, 
  AvatarMigration, 
  CarsMigration, 
  IsertUserValues,
  CreateSpecificationCar
];

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'rentalx',
  password: 'test',
  database: 'rentalx',
  entities: Entity,
  synchronize: true,
  logging: true,
  migrations: Migrations,
});
