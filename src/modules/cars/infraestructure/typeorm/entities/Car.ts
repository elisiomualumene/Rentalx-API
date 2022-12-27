import {v4} from 'uuid';
import {Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import {Category} from './Category';
import { Specification } from './Specification';

@Entity('Car')
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

    @ManyToOne(() => Category)
    @JoinColumn({name: 'category_id'})
      category!: Category;

    @Column()
      category_id!: string;

    @CreateDateColumn()
      created_at?: Date;

    @ManyToMany(() => Specification)
    @JoinTable({
      name: 'SpecificationCars', 
      joinColumns: [{name: 'car_id'}], 
      inverseJoinColumns: [{name: 'specification_id'}]
    })
      specifications!: Specification[]


    constructor() {
      if (!this.id) {
        this.id = v4();
      }
      if (!this.available) {
        this.available = true;
      }
    }
}

export {Car};
