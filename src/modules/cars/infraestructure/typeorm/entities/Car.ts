import {Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm"

@Entity("Car")
class Car {
    @PrimaryColumn()
    id?: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    daily_rate!: number;

    @Column()
    available!: boolean;

    @Column()
    licence_plate!: string;

    @Column()
    fine_amount!: number;

    @Column()
    brand!: string;

    @Column()
    category_id!: string;

    @CreateDateColumn()
    created_at?: Date;
}

export {Car}