import { Request, Response} from "express";
import { container } from "tsyringe";
import { createSpecificationUseCase } from "./createSpecificationUseCase";

class createSpecificationController {
  //  constructor(private CreateSpecificationUseCase: createSpecificationUseCase){}

   async handle(request: Request, response: Response): Promise<Response>{
        
        const {name, description} = request.body;
        
        const CreateSpecificationUseCase = container.resolve(createSpecificationUseCase);
        
        await CreateSpecificationUseCase.execute({name, description});

        return response.status(201).json({status: true,'message': 'Specification was added'})
    }
}

export { createSpecificationController };