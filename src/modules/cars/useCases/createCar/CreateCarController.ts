import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {CreateCarUseCase} from './CreateCarUseCase';


export class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      licence_plate,
      name,
    } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      licence_plate,
      name,
    });

    return response.status(201).json(car);
  }
}
