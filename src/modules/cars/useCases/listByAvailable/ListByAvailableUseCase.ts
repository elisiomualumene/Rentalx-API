import { injectable, inject } from "tsyringe";
import { Car } from "../../../../modules/cars/infraestructure/typeorm/entities/Car";
import { ICarRepository } from '../../../../modules/cars/repositories/Car/ICarRepository';

interface IRequest {
    category_id?: string;
    brand?: string;
    name?: string
}

@injectable()
export class ListByAvailableUseCase {
    constructor(
        @inject('CarRepository')
        private carRepository: ICarRepository
    ){}
    async execute({category_id, brand, name}: IRequest): Promise<Car[]>{
        const cars = await this.carRepository.listByAvailable(category_id, brand, name);
        
        return cars
    }
}