import { Request, Response } from "express";
import { container } from 'tsyringe';
import { ListUserUseCase } from './ListUserUseCase';


export class ListUserController {
     async handle(request: Request, response: Response): Promise<Response>{
        const listUserUseCase = container.resolve(ListUserUseCase)

        const allUser = await listUserUseCase.execute();

        return response.json(allUser);
    }
}