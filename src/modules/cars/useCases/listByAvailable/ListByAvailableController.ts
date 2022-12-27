import { Response, Request } from "express"
import { container } from "tsyringe"
import { ListByAvailableUseCase } from "./ListByAvailableUseCase"

export class ListByAvailableController {
    async handle(req: Request, res: Response): Promise<Response>{
        const { brand, category_id, name } = req.query;

        const listByAvailableUseCase = container.resolve(ListByAvailableUseCase);

        const cars = await listByAvailableUseCase.execute({
            brand: brand as string, 
            category_id: category_id as string, 
            name: name as string
        });

        return res.status(200).json(cars)
    }
}