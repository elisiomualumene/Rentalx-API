import { inject, injectable } from 'tsyringe';
import { ICarRepository } from '../../../../modules/cars/repositories/Car/ICarRepository';
import { ICreateCarProps } from "../../../../modules/cars/types/useCases";



@injectable()
export class CreateCarUseCase{
    constructor(
        @inject("CarRepository")
        private carRepository: ICarRepository
    ){}
    async execute ({
        available, 
        brand, 
        category_id,
        daily_rate, 
        description, 
        fine_amount, 
        licence_plate, 
        name
    }: ICreateCarProps): Promise<void>{
        this.carRepository.create({        
            available, 
            brand, 
            category_id,
            daily_rate, 
            description, 
            fine_amount, 
            licence_plate, 
            name
        })
    }
}