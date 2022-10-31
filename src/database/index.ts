import {Category} from "../modules/cars/entities/Category"
import { DataSource } from "typeorm";

const entities = {
    Category,
}

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: '0.0.0.0',
    port: Number('5432'),
    username: 'rentalx',
    password: 'test',
    database: 'rentalx',
    entities,
    subscribers: [],
    migrations: ['./migrations/*'],
  });