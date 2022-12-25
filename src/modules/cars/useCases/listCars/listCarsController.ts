import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {ListCarsUseCase} from './listCarsUseCase';

export class ListCarsController {
  async handle(request: Request, response: Response) {
    const listCarsUseCase = container.resolve(ListCarsUseCase);

    const allCars = await listCarsUseCase.execute();

    return response.status(200).json(allCars);
  }
}
