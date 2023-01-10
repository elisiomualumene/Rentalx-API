import { CreateRentalUseCase } from "./createRentalUseCase"
import { RentalRepositoryInMemory } from "../../../../modules/rentals/infraestructure/typeorm/repositories/In-Memory/RentalRepositoryInMemory";
import { AppError } from "../../../../shared/errors/AppError";
import dayjs from 'dayjs';
import { DayJsDateProviderImpl } from '../../../../shared/container/providers/DateProvider/implementation/DayJsDateProviderImpl';
import { In_memoryImpl } from '../../../cars/repositories/Car/in-memory/In-memoryImpl';

let createRentalUseCase: CreateRentalUseCase;
let dayjsProvider: DayJsDateProviderImpl
let rentalRepositoryInMemory : RentalRepositoryInMemory
let carsRepositoryInMemory: In_memoryImpl;

describe('create Rental', () => {
    const day = dayjs().add(1, 'day').toDate()
    beforeEach(() => {
        rentalRepositoryInMemory = new RentalRepositoryInMemory()
        dayjsProvider = new DayJsDateProviderImpl()
        carsRepositoryInMemory = new In_memoryImpl()
        createRentalUseCase = new CreateRentalUseCase(rentalRepositoryInMemory, dayjsProvider, carsRepositoryInMemory)
    })
    it('should be able to rent a car', async() => {
        const rental = await createRentalUseCase.execute({car_id: '12345', user_id: '121212', expected_return_date: day})

        expect(rental).toHaveProperty('id')
        expect(rental).toHaveProperty('start_date')
    })

    it('should not be able to create a new rental if there is another open to the same user', async() => {
        expect(async() => {
            await createRentalUseCase.execute({car_id: '1234445', user_id: '121212', expected_return_date: day})

            await createRentalUseCase.execute({car_id: '12345', user_id: '121212', expected_return_date: day})
        }).rejects.toBeInstanceOf(AppError)
    })

    it('should not be able to create a new rental with an invalid return date', async() => {
        expect(async() => {
            await createRentalUseCase.execute({car_id: '1234445', user_id: '121212', expected_return_date: dayjs().toDate()})
        }).rejects.toBeInstanceOf(AppError)
    })
})