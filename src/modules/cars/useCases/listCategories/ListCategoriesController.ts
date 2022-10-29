import { Request, Response } from "express"
import { ListCategoriesUseCase } from "./listCategoryUseCase";

class ListCategoriesController{
    constructor(private listCategoryUseCase: ListCategoriesUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        const all = await this.listCategoryUseCase.execute();

        return response.json(all);
    }
}

export { ListCategoriesController }