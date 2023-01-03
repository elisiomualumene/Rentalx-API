import 'reflect-metadata';
import { AppError } from './../../../../shared/errors/AppError';
import { injectable, inject } from "tsyringe";
import { ICarRepository } from '../../../../modules/cars/repositories/Car/ICarRepository';
import { ISpecificationRepository } from '../../../../modules/cars/repositories/Specification/implementation/ISpecificationRepository';
import { Car } from '../../../../modules/cars/infraestructure/typeorm/entities/Car';


interface IRequest {
    car_id: any;
    specification_id: any[]
}

@injectable()
export class CreateCarSpecificationUseCase{
    constructor(
        @inject('CarRepository')
        private carRepository: ICarRepository,
        @inject('RepositorySpecification')
        private specificationRepository: ISpecificationRepository
    ){}
    async execute({car_id,specification_id}:IRequest): Promise<Car>{
        const carExists = await this.carRepository.findById(car_id)

        if(!carExists){
            throw new AppError('Car already Exists')
        }
        const specifications = await this.specificationRepository.findByIds(specification_id)

        carExists.specifications = specifications;

        await this.carRepository.create(carExists);
        
        return carExists
    }
}