import {Request, Response} from 'express';
import {CreateCategoryUseCase} from './createCategoryUseCase';
import {container} from 'tsyringe';

class CreateCategoryController {
  // constructor(private createCategoryUseCase: CreateCategoryUseCase){}
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, description} = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({name, description});

    return response.status(201).json({status: true, message: 'category was added!'});
  }
}

export {CreateCategoryController};
