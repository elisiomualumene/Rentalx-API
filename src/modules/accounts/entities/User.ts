import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

import { v4 as uuidV4 } from 'uuid';

@Entity("User")
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name!: string;
    
    @Column()
    username!: string;

    @Column()
    password!: string; 

    @Column()
    email!: string;

    @Column()
    driver_licence!: string;

    @Column()
    isAdmin!: boolean;

    @CreateDateColumn()
    created_at?: Date

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }

}

export { User }