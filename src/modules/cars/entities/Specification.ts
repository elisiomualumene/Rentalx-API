import { v4 as uuidV4} from 'uuid'
import { PrimaryColumn, Column, CreateDateColumn, Entity } from "typeorm"

@Entity()
class Specification{
    @PrimaryColumn()
    id?: string;

    @Column()
    name?: string;

    @Column()
    description?:string;

    @CreateDateColumn()
    created_at?: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}
export {Specification};