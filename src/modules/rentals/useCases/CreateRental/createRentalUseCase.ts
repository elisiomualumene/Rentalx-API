import 'reflect-metadata'
import { injectable, inject } from 'tsyringe';
import { Rental } from '../../../../modules/rentals/infraestructure/typeorm/entities/Rental';
import { IDateProvider } from '../../../../shared/container/providers/DateProvider/IDateProvider';
import { IRentalRepository } from '../../repositories/IRentalRepository';
import { AppError } from '../../../../shared/errors/AppError';
import dayjs from 'dayjs';
import { ICarRepository } from '../../../../modules/cars/repositories/Car/ICarRepository';

interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: Date;
}

@injectable()
export class CreateRentalUseCase{
    constructor(
        @inject('RentalRepository')
        private rentalRepository: IRentalRepository,
        @inject('DayJsProvider')
        private dataProvider: IDateProvider,
        @inject('CarRepository')
        private carRepository: ICarRepository
    ){}
    async execute({car_id,expected_return_date,user_id}:IRequest): Promise<Rental>{
        const min = 24;
        const carUnavailable = await this.rentalRepository.findOpenRentalByCar(car_id);

        if(carUnavailable){
            throw new AppError("Car is Unavailable")
        }

        const rentalOpenToUser = await this.rentalRepository.findOpenRentalByUser(user_id);

        if(rentalOpenToUser){
            throw new AppError("There are a rental in progress for this user")
        }

        const compare = this.dataProvider.compareInHours(dayjs().toDate(), expected_return_date)
        
        if(compare < min){
            throw new AppError('Invalid return time')
        }

        const rental = await this.rentalRepository.create({car_id, user_id, expected_return_date})

        const available = false;

        await this.carRepository.updateByAvailable({id: car_id, available})

        return rental
    }
}