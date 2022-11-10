import {Category} from "../modules/cars/entities/Category"
import { Specification } from "../modules/cars/entities/Specification";

import {CreateCategory1664470153748} from "./migrations/1664470153748-CreateCategory"
import { createSpecification1667240325686 } from "./migrations/1667240325686-CreateSpecifications";

import { DataSource } from 'typeorm';


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'rentalx',
    password: 'test',
    database: 'rentalx',
    entities: [Category, Specification],
    synchronize: true,
    logging: true,
    migrations: [CreateCategory1664470153748, createSpecification1667240325686]
  });