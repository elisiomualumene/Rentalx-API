import { In_memoryImpl } from "../../../../modules/cars/repositories/Car/in-memory/In-memoryImpl";
import { ListByAvailableUseCase } from "./ListByAvailableUseCase"

let listByAvailable: ListByAvailableUseCase;
let CarRepositoryInMemory: In_memoryImpl;

describe('List By Available ',() => {
    beforeEach(() => {
        CarRepositoryInMemory = new In_memoryImpl()
        listByAvailable = new ListByAvailableUseCase(CarRepositoryInMemory);
    })
    it("should be able to list all cars available by brand, category_id and name", async() => {
        const car = await CarRepositoryInMemory.create({
            brand: "Ferrari", 
            category_id: "faa42f8a-7454-4ba6-875f-1347ef978c90",
            daily_rate: 100, 
            description: "bigger", 
            fine_amount: 9, 
            licence_plate: "ABCD-8234", 
            name: "Carro"
        })

        const cars = await listByAvailable.execute({brand: 'ferrari10'});

        expect(cars).toEqual([car])
    })
})