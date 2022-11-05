import {Category} from "../modules/cars/entities/Category"
import {CreateCategory1664470153748} from "./migrations/1664470153748-CreateCategory"
import { DataSource } from 'typeorm';


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'rentalx',
    password: 'test',
    database: 'rentalx',
    entities: [Category],
    synchronize: true,
    migrations: [CreateCategory1664470153748],
  });