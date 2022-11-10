import { Request, Response} from "express";
import { container } from "tsyringe";
import { listSpecificationsUseCase } from "./listSpecificationsUseCase";

class listSpecificationsController{
    async handle(request: Request, response: Response): Promise<Response>{
        const ListSpecificationsUseCase = container.resolve(listSpecificationsUseCase);

        const all = await ListSpecificationsUseCase.execute()

       return response.json(all);
    }
}

export {  listSpecificationsController };