import { Request, Response} from "express";
import { listSpecificationsUseCase } from "./listSpecificationsUseCase";

class listSpecificationsController{
    
    constructor(private ListSpecificationsUseCase: listSpecificationsUseCase){}

    handle(request: Request, response: Response): Response{
       const all = this.ListSpecificationsUseCase.execute()

       return response.json(all);
    }
}

export {  listSpecificationsController };