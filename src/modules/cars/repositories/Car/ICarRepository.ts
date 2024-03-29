import {Car} from '../../../../modules/cars/infraestructure/typeorm/entities/Car';
import {ICreateCarDTO} from '../../types/dtos';


interface ICarRepository {
    create(data: ICreateCarDTO): Promise<Car>
    list(): Promise<Car[]>;
    findById(id: string): Promise<Car | null>;
    listByAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]>;
    findByLicencePlate(licence_plate: string): Promise<Car>;
    updateByAvailable({id, available}: IUpdateAvailable): Promise<void>
}

export {ICarRepository};
