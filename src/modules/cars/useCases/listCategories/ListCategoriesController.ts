import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {ListCategoriesUseCase} from './listCategoryUseCase';

class ListCategoriesController {
//    constructor(private listCategoryUseCase: ListCategoriesUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoriesUseCase);

    const all = await listCategoryUseCase.execute();

    return response.json(all);
  }
}

export {ListCategoriesController};
