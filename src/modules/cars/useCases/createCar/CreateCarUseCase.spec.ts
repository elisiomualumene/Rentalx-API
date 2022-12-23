import { CreateCarUseCase } from './CreateCarUseCase';
import { randomUUID } from 'crypto';
import { In_memoryImpl } from '../../repositories/Car/in-memory/In-memoryImpl';
import { ICarRepository } from '../../../../modules/cars/repositories/Car/ICarRepository';

let createCarUseCase: CreateCarUseCase;
 let carRepository: ICarRepository;
describe('create car', () => {
    beforeEach(() => {
        carRepository: new In_memoryImpl();
       createCarUseCase = new CreateCarUseCase(carRepository);
    })

    it('should be able to create cars', () => {
      createCarUseCase.execute({
        available: true, 
        brand: 'Ferrari', 
        category_id: randomUUID(),
        daily_rate: 100, 
        description: 'bigger', 
        fine_amount: 9, 
        licence_plate: "949595", 
        name: 'Carro'
      })  
    })
})