import 'reflect-metadata';
import {Car} from '../../../../modules/cars/infraestructure/typeorm/entities/Car';
import {injectable, inject} from 'tsyringe';
import {ICarRepository} from '../../../../modules/cars/repositories/Car/ICarRepository';
import {ICreateCarProps} from '../../../../modules/cars/types/useCases';
import {AppError} from '../../../../shared/errors/AppError';

@injectable()
export class CreateCarUseCase {
  constructor(
        @inject('CarRepository')
        private CarRepository: ICarRepository,
  ) {}
  async execute({brand, category_id, daily_rate, description, fine_amount, licence_plate, name}:ICreateCarProps): Promise<Car> {
    const CarAlreadyExists = await this.CarRepository.findByLicencePlate(licence_plate);

    if (CarAlreadyExists) {
      throw new AppError('Car Already Exists');
    }

    const car = await this.CarRepository.create({brand, category_id, daily_rate, description, fine_amount, licence_plate, name});

    return car;
  }
}
