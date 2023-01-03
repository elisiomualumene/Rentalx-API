import { Rental } from '@modules/rentals/infraestructure/typeorm/entities/Rental';
import { IRentalRepository } from '../../../../modules/rentals/infraestructure/typeorm/repositories/IRentalRepository';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: Date;
}

export class CreateRentalUseCase{
    constructor(
        private rentalRepository: IRentalRepository
    ){}
    async execute({car_id,expected_return_date,user_id}:IRequest): Promise<Rental>{
        const carUnavailable = await this.rentalRepository.findOpenRentalByCar(car_id);

        if(carUnavailable){
            throw new AppError("Car is Unavailable")
        }

        const rentalOpenToUser = await this.rentalRepository.findOpenRentalByUser(user_id);

        if(rentalOpenToUser){
            throw new AppError("There are a rental in progress for this user")
        }

        const rental = await this.rentalRepository.create({car_id, user_id, expected_return_date})

        return rental
    }
}