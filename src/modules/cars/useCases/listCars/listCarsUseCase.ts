import {injectable, inject} from 'tsyringe';
import {ICarRepository} from '../../../../modules/cars/repositories/Car/ICarRepository';

@injectable()
export class ListCarsUseCase {
  constructor(
        @inject('CarRepository')
        private carRepository: ICarRepository,
  ) {}
  async execute() {
    const cars = await this.carRepository.list();

    return cars;
  }
}
