import { Repository } from 'typeorm';
import { IRentalRepository } from '../../../repositories/IRentalRepository';
import { Rental } from '../entities/Rental';
import { AppDataSource } from '../../../../../shared/infraestructure/database/index';


export class RentalRepository implements IRentalRepository {
    private repository: Repository<Rental>

    constructor(){
        this.repository = AppDataSource.getRepository(Rental)
    }
    async create({car_id,expected_return_date, user_id}: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({car_id, expected_return_date, user_id})

        await this.repository.save(rental);

        return rental
    }
    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const OpenRentalByCar: any = await this.repository.findOneBy({car_id})
        return OpenRentalByCar
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const OpenRentalByUser: any = await this.repository.findOneBy({user_id})

        return OpenRentalByUser
    }
}