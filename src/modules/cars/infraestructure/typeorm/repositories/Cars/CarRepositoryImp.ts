import { Repository } from 'typeorm';
import { ICreateCarDTO } from '@modules/cars/types/dtos';
import { ICarRepository } from '../../../../../../modules/cars/repositories/Car/ICarRepository';
import { AppDataSource } from '../../../../../../shared/infraestructure/database/index';
import { Car } from '../../entities/Car';
class CarRepository implements ICarRepository{
    private repository: Repository<Car>

    constructor(){
        this.repository = AppDataSource.getRepository(Car)
    }
    async create({available,brand,category_id,daily_rate,description,fine_amount,licence_plate,name}: ICreateCarDTO): Promise<void> {
        const Car =  this.repository.create({
            available,
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            licence_plate,
            name
        })

        await this.repository.save(Car);
    }
}

export {CarRepository}