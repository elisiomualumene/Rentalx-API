import { Request, Response } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { container } from 'tsyringe';

export class DeleteUserController {
     async handle(request: Request, response: Response): Promise<any>{
        const {id} = request.params;

        const deleteUserUseCase = container.resolve(DeleteUserUseCase);

        await  deleteUserUseCase.execute(id);

        response.status(200).json({status: true, message: "user was deleted"})
    }
}