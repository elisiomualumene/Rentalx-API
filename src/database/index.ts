import "reflect-metadata"
import { DataSource } from "typeorm"

const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "rentalx",
    password: "",
    database: "rentalx",
    entities: [
        // ....
    ],
})


PostgresDataSource.initialize()