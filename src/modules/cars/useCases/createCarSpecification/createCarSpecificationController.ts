import { container } from "tsyringe";
import {Request, response, Response} from "express"
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

export class CreateCarSpecificationController {
    async handle(req: Request, res: Response){
        const {id} = req.params;
        const {specification_id} = req.body;

        const createCarSpecificationUseCase = container.resolve(CreateCarSpecificationUseCase)

        const car = await createCarSpecificationUseCase.execute({car_id: id, specification_id})

        return res.status(200).json(car);
    }
} 