import {v4 as uuidV4} from "uuid"
import {Entity, Column, PrimaryColumn, CreateDateColumn} from "typeorm"

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string | undefined;

    @Column()
    description:string | undefined;

    @CreateDateColumn()
    created_at?: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export {Category};