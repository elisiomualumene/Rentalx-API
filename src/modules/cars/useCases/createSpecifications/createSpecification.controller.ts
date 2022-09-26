import { Request, Response} from "express";
import { createSpecificationUseCase } from "./createSpecificationUseCase";

class createSpecificationController {
    constructor(private CreateSpecificationUseCase: createSpecificationUseCase){}

    handle(request: Request, response: Response): Response{
    
    const {name, description} = request.body;
    
    this.CreateSpecificationUseCase.execute({name, description});

    return response.status(201).json({'message': 'Specification was added'})
    }
}

export { createSpecificationController };