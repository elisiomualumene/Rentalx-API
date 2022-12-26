import { AppDataSource } from "..";
import { v4 } from "uuid";
import { hash } from "bcrypt";


async function create() {
    const id = v4()
    const password = await hash('admin', 8)

    await AppDataSource.query(      
        `INSERT INTO USER(id, email, password,"isAdmin", created_at)
        values('${id}', 'admin', 'elisiomualumene@gmail.com', '${password}', true, 'now()')
    `);
}

create().then(() => console.log('user admin was created'))
