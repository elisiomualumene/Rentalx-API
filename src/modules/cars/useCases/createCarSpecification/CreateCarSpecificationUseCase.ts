import 'reflect-metadata';
import { AppError } from './../../../../shared/errors/AppError';
import { injectable, inject } from "tsyringe";
import { ICarRepository } from '../../../../modules/cars/repositories/Car/ICarRepository';


interface IRequest {
    car_id: string;
    specification_id: string[]
}

@injectable()
export class CreateCarSpecificationUseCase{
    constructor(
        @inject('CarRepository')
        private carRepository: ICarRepository
    ){}
    async execute({car_id,specification_id}:IRequest): Promise<void>{
        const carExists = await this.carRepository.findById(car_id)

        if(!carExists){
            throw new AppError('Car already Exists')
        }
    }
}