import {Repository} from 'typeorm';
import {ICreateCarDTO} from '../../../../../../modules/cars/types/dtos';
import {ICarRepository} from '../../../../../../modules/cars/repositories/Car/ICarRepository';
import {AppDataSource} from '../../../../../../shared/infraestructure/database/index';
import {Car} from '../../entities/Car';

class CarRepository implements ICarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }

  async create({brand, category_id, daily_rate, description, fine_amount, licence_plate, name, specifications, id}: ICreateCarDTO): Promise<Car> {
    const Car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      licence_plate,
      name,
      specifications,
      id
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

  async listByAvailable(brand?: string, category_id?:string, name?: string): Promise<Car[]> {
      const carsQuery = this.repository.
      createQueryBuilder("c").where("available = :available", {available: true})

      if(brand){
        carsQuery.andWhere("brand = :brand", {brand})
      }

      if(category_id){
        carsQuery.andWhere("category_id = :category_id", {category_id})
      }

      if(name){
        carsQuery.andWhere("name = :name", {name})
      }
       
      const cars = await carsQuery.getMany()
      
      return cars
  }

  async findById(id: string): Promise<Car | null> {
    const car = await this.repository.findOneBy({id})

    return car
    }

    async updateByAvailable({id, available}: IUpdateAvailable): Promise<void> {
        await this.repository
        .createQueryBuilder()
        .update()
        .set({available})
        .where("id = :id")
        .setParameters({id})
        .execute()
    }
}

export {CarRepository};
