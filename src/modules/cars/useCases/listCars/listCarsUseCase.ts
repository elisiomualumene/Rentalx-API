import { Car } from '../../../../modules/cars/infraestructure/typeorm/entities/Car';
import {injectable, inject} from 'tsyringe';
import {ICarRepository} from '../../../../modules/cars/repositories/Car/ICarRepository';

@injectable()
export class ListCarsUseCase {
  constructor(
        @inject('CarRepository')
        private carRepository: ICarRepository,
  ) {}
  async execute(): Promise<Car> {
    const cars: any = await this.carRepository.list();

    return cars;
  }
}
