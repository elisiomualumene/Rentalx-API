import { v4 as UUIDV4 } from "uuid";
import { PrimaryColumn, Column, CreateDateColumn, Entity, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Car } from "../../../../../modules/cars/infraestructure/typeorm/entities/Car";
import { User } from "../../../../../modules/accounts/infraestructure/typeorm/entities/User";

@Entity('Rental')
export class Rental {
    @PrimaryColumn()
    id?: string;

    @OneToOne(() => Car)
    @JoinColumn({name: 'car_id'})
    car_id!: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
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