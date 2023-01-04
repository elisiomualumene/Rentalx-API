import { v4 as UUIDV4 } from "uuid";
import { PrimaryColumn, Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity('Rental')
export class Rental {
    @PrimaryColumn()
    id?: string;

    @Column()
    car_id!: string;

    @Column()
    user_id!: string;

    @Column({default: 'now()'})
    start_date!: Date;

    @Column({nullable: true})
    end_date!: Date;

    @Column()
    expected_return_date!: Date;

    @Column({nullable: true})
    total!: number;
    
    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor(){
        if(!this.id){
            this.id = UUIDV4();
            this.start_date = new Date()
        }
    }
}