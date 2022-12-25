import {CreateCarUseCase} from './CreateCarUseCase';
import {In_memoryImpl} from '../../repositories/Car/in-memory/In-memoryImpl';
import {AppError} from '../../../../shared/errors/AppError';

let createCarUseCase: CreateCarUseCase;
let createCarRepositoryInMemory: In_memoryImpl;

describe('create car', () => {
  beforeEach(() => {
    createCarRepositoryInMemory = new In_memoryImpl();
    createCarUseCase = new CreateCarUseCase(createCarRepositoryInMemory);
  });

  it('should be able to create cars', async () => {
    const car = await createCarUseCase.execute({
      brand: 'Ferrari',
      category_id: '123',
      daily_rate: 100,
      description: 'bigger',
      fine_amount: 9,
      licence_plate: '879595',
      name: 'Carro',
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able to create a car with the same licence plate', async () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: 'Ferrari',
        category_id: '123',
        daily_rate: 100,
        description: 'bigger',
        fine_amount: 9,
        licence_plate: '949595',
        name: 'Carro',
      });
      await createCarUseCase.execute({
        brand: 'Ferrari',
        category_id: '123',
        daily_rate: 100,
        description: 'bigger',
        fine_amount: 9,
        licence_plate: '949595',
        name: 'Carro',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a car with available true', async () => {
    const car = await createCarUseCase.execute({
      brand: 'Ferrari',
      category_id: '123',
      daily_rate: 100,
      description: 'bigger',
      fine_amount: 9,
      licence_plate: '94595',
      name: 'Carro',
    });

    expect(car.available).toBe(true);
  });
});
