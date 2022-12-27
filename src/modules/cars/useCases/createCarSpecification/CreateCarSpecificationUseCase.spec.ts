import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';
import { In_memoryImpl } from '../../repositories/Car/in-memory/In-memoryImpl';
import { AppError } from '../../../../shared/errors/AppError';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase
let CarRepositoryInMemory : In_memoryImpl
describe('Specification Car', () => {
    beforeEach(() => { 
        CarRepositoryInMemory = new In_memoryImpl()
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(CarRepositoryInMemory)
    })

    it('should be able to create a Specification car', async() => {
        const car = await CarRepositoryInMemory.create({
            brand: 'Ferrari',
            category_id: '123',
            daily_rate: 100,
            description: 'bigger',
            fine_amount: 9,
            licence_plate: '879595',
            name: 'Carro',
        })
        const specification_id = ['2333']
       expect(async() => {
            await createCarSpecificationUseCase.execute({car_id: car.id ?? '', specification_id})
       }).toBeTruthy()
    })

    it('should not be able to create a car specification with an inexistent car', async() => {
        expect(async() => {
            const car_id = '333'
            const specification_id = ['122']
            await createCarSpecificationUseCase.execute({car_id, specification_id})
        }).rejects.toBeInstanceOf(AppError)
    })
})