import { CreateRentalUseCase } from "./createRentalUseCase"
import { RentalRepositoryInMemory } from "../../../../modules/rentals/infraestructure/typeorm/repositories/In-Memory/RentalRepositoryInMemory";

let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory : RentalRepositoryInMemory
describe('create Rental', () => {
    beforeEach(() => {
        rentalRepositoryInMemory = new RentalRepositoryInMemory()
        createRentalUseCase = new CreateRentalUseCase(rentalRepositoryInMemory)
    })
    it('should be able to rent a car', async() => {
        const rental = await createRentalUseCase.execute({car_id: '12345', user_id: '121212', expected_return_date: new Date()})

        expect(rental).toHaveProperty('id')
        expect(rental).toHaveProperty('start_date')
    })

    it('should not be able to create a new rental if there is another open to the same user', async() => {
        await createRentalUseCase.execute({car_id: '1234445', user_id: '121212', expected_return_date: new Date()})

        const rental = await createRentalUseCase.execute({car_id: '12345', user_id: '121212', expected_return_date: new Date()})

        expect(rental).toHaveProperty('id')
        expect(rental).toHaveProperty('start_date')
    })
})