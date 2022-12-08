import {v4 as uuidV4} from "uuid"
import {Entity, Column, PrimaryColumn, CreateDateColumn} from "typeorm"

@Entity("Category")
class Category {
    @PrimaryColumn()
    id?: string;

    @Column({
        length: 100,
    })
    name!: string;

    @Column()
    description!: string;

    @CreateDateColumn()
    created_at?: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export {Category};