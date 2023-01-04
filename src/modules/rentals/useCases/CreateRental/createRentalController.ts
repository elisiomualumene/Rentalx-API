import { container } from "tsyringe";
import { CreateRentalUseCase } from "./createRentalUseCase";
import { Request, Response } from "express";

export class CreateRentalController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {car_id, expected_return_date} = request.body;
        const {user_id} = request.user;

        const createRentalUseCase = container.resolve(CreateRentalUseCase);

        const rental = await createRentalUseCase.execute({user_id, car_id,expected_return_date});

        return response.status(201).json({status: true, message: 'rental was created', data: rental})
    }
}