import {Category} from "../../../modules/cars/infraestructure/typeorm/entities/Category"
import { Specification } from "../../../modules/cars/infraestructure/typeorm/entities/Specification";
import { User } from "../../../modules/accounts/infraestructure/typeorm/entities/User";

import {CreateCategory1664470153748 as CategoryMigration} from "./migrations/1664470153748-CreateCategory"
import { createSpecification1667240325686 as SpecificationMigration } from "./migrations/1667240325686-CreateSpecifications";
import { CreateUsers1668178211212 as UserMigration } from "./migrations/1668178211212-CreateUsers";
import { AlterUserAddAvatar1668599236908 as AvatarMigration } from "./migrations/1668599236908-AlterUserAddAvatar";
import { CreateCars1671819999593 as CarsMigration } from "./migrations/1671819999593-CreateCars";

import { DataSource } from 'typeorm';

const Entity = [Category, Specification, User];

const Migrations = [CategoryMigration, SpecificationMigration, UserMigration, AvatarMigration, CarsMigration]

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