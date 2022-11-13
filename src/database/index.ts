import {Category} from "../modules/cars/entities/Category"
import { Specification } from "../modules/cars/entities/Specification";
import { User } from "../modules/accounts/entities/User";

import { DataSource } from 'typeorm';


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'rentalx',
    password: 'test',
    database: 'rentalx',
    entities: [Category, Specification, User],
    synchronize: true,
    logging: true,
    migrations: ["./src/database/migrations/*.ts"],
  });