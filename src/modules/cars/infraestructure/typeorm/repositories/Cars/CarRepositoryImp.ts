import {Repository} from 'typeorm';
import {ICreateCarDTO} from '@modules/cars/types/dtos';
import {ICarRepository} from '../../../../../../modules/cars/repositories/Car/ICarRepository';
import {AppDataSource} from '../../../../../../shared/infraestructure/database/index';
import {Car} from '../../entities/Car';

class CarRepository implements ICarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }
  async create({brand, category_id, daily_rate, description, fine_amount, licence_plate, name}: ICreateCarDTO): Promise<Car> {
    const Car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      licence_plate,
      name,
    });

    await this.repository.save(Car);

    return Car;
  }

  async findByLicencePlate(licence_plate: string): Promise<Car> {
    const car: any = await this.repository.findOneBy({licence_plate});

    return car;
  }

  async list(): Promise<Car[]> {
    const cars = await this.repository.find();

    return cars;
  }
}

export {CarRepository};
