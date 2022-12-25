import {Car} from '../../../../modules/cars/infraestructure/typeorm/entities/Car';
import {ICreateCarDTO} from '../../types/dtos';

interface ICarRepository {
    create(data: ICreateCarDTO): Promise<Car>
    list(): Promise<Car[]>
    findByLicencePlate(licence_plate: string): Promise<Car>
}

export {ICarRepository};
