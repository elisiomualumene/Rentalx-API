import {MigrationInterface, QueryRunner} from "typeorm";
import { v4 } from "uuid";
import { hash } from "bcrypt";

export class InsertUserValues1672062931180 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const id = v4()
        const password = await hash('admin', 8)

        await queryRunner.query(`INSERT INTO USER(id, email, password,"isAdmin", created_at)
        values('${id}', 'admin', 'elisiomualumene@gmail.com', '${password}', true, 'now()')
    `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
