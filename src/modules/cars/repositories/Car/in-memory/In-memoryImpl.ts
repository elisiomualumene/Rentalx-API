import { Car } from '../../../../../modules/cars/infraestructure/typeorm/entities/Car';
import { ICreateCarDTO } from '@modules/cars/types/dtos';
import { ICarRepository } from '../../../../../modules/cars/repositories/Car/ICarRepository';


export class In_memoryImpl implements ICarRepository {
    private Cars: Car[] = []

    async create({available,brand,category_id,daily_rate,description,fine_amount,licence_plate,name}: ICreateCarDTO): Promise<void> {
        const car = new Car();

        Object.assign(car, {available,brand,category_id,daily_rate,description,fine_amount,licence_plate,name});
        
        this.Cars.push(car);
    }
}