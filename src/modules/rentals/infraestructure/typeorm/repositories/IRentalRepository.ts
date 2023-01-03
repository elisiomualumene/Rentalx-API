import { Rental } from "../entities/Rental";

export interface IRentalRepository {
    create(data: ICreateRentalDTO): Promise<Rental>
    findOpenRentalByCar(car_id: string): Promise<Rental>;
    findOpenRentalByUser(user_id: string): Promise<Rental>;
}