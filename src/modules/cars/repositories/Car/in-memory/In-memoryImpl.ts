import {Car} from '../../../../../modules/cars/infraestructure/typeorm/entities/Car';
import {ICreateCarDTO} from '@modules/cars/types/dtos';
import {ICarRepository} from '../../../../../modules/cars/repositories/Car/ICarRepository';


export class In_memoryImpl implements ICarRepository {
  private Cars: Car[] = [];

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    licence_plate,
    name,
    id
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      licence_plate,
      name,
      id
    });

    this.Cars.push(car);

    return car;
  }

  async findByLicencePlate(licence_plate: string): Promise<Car> {
    const car: any = this.Cars.find((car) => car.licence_plate === licence_plate);

    return car;
  }

  async list(): Promise<Car[]> {
    const cars = this.Cars;

    return cars;
  }

  async listByAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]> {
      const cars = this.Cars
      .filter((car) => {
          if(car.available === true || ((brand && car.brand === brand) || (category_id && car.category_id === category_id) || (name && car.name === name))
          ){ 
            return car
          }
        }
      )
      return cars
  }

  async findById(id: string): Promise<Car> {
    const car: any = this.Cars.find((car) => car.id === id)
      return car
  }
}
