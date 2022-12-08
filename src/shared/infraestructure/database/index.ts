import {Category} from "../../../modules/cars/infraestructure/typeorm/entities/Category"
import { Specification } from "../../../modules/cars/infraestructure/typeorm/entities/Specification";
import { User } from "../../../modules/accounts/infraestructure/typeorm/entities/User";

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