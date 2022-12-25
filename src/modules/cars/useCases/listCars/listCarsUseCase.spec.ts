import {In_memoryImpl} from '../../../../modules/cars/repositories/Car/in-memory/In-memoryImpl';
import {ListCarsUseCase} from './listCarsUseCase';

let CarInMemoryRepository: In_memoryImpl;
let listCarsUseCase: ListCarsUseCase;

describe('All Cars', () => {
  beforeEach(() => {
    CarInMemoryRepository = new In_memoryImpl();
    listCarsUseCase = new ListCarsUseCase(CarInMemoryRepository);
  });

  it('should be able to list all cars', async () => {
    const allCars = await listCarsUseCase.execute();

    expect(allCars).toBeTruthy();
  });
});
