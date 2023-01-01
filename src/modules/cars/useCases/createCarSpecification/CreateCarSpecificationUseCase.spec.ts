import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';
import { In_memoryImpl } from '../../repositories/Car/in-memory/In-memoryImpl';
import { AppError } from '../../../../shared/errors/AppError';
import { SpecificationRepositoryInMemory } from '../../repositories/Specification/InMemory/SpecificationRepositoryInMemory';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase
let CarRepositoryInMemory : In_memoryImpl
let specificationRepository: SpecificationRepositoryInMemory
describe('Specification Car', () => {
    beforeEach(() => { 
        CarRepositoryInMemory = new In_memoryImpl()
        specificationRepository = new SpecificationRepositoryInMemory()
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(CarRepositoryInMemory, specificationRepository)
    })

    it('should be able to create a Specification car', async() => {
        const car = await CarRepositoryInMemory.create({
            brand: 'Audi',
            category_id: '321',
            daily_rate: 5,
            description: 'comfortable',
            fine_amount: 6,
            licence_plate: 'C40-34N',
            name: 'Audi Hurus',
            id: '10203939-34err-e-45545-eer'
        })
        const specification = await specificationRepository.create({description: 'Carro de Luxo', name:'Luxo'})
        const specification_id = [specification.id]
        const specificationsCars = await createCarSpecificationUseCase.execute({car_id: car.id, specification_id})

        expect(specificationsCars).toHaveProperty('specifications')
        expect(specificationsCars.specifications.length).toBe(1)
    })

    it('should not be able to create a car specification with an inexistent car', async() => {
        expect(async() => {
            const car_id = '333'
            const specification_id = ['122']
            await createCarSpecificationUseCase.execute({car_id, specification_id})
        }).rejects.toBeInstanceOf(AppError)
    })
})