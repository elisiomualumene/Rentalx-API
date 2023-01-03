import { Rental } from '../../entities/Rental';
import { IRentalRepository } from "../IRentalRepository";

export class RentalRepositoryInMemory implements IRentalRepository {
    private rentals: Rental[] = [];

    async create({car_id,expected_return_date,user_id}: ICreateRentalDTO): Promise<Rental> {
        const rental = new Rental();

        Object.assign(rental, {
            car_id, user_id, expected_return_date, start_date: new Date()
        })

        await this.rentals.push(rental)

        return rental
    }

    findOpenRentalByCar(car_id: string): Promise<Rental> {
        const rental:any = this.rentals.find((rental) => rental.car_id === car_id && !rental.end_date)
        return rental
    }
    findOpenRentalByUser(user_id: string): Promise<Rental> {
        const rental:any = this.rentals.find((rental) => rental.user_id === user_id && !rental.end_date)
        return rental
    }
    
}