import {Request, Response} from 'express';
import {container} from 'tsyringe';
import {CreateUserUseCase} from './CreateUserUseCase';


export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, username, email, password, driver_licence, isAdmin} = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({name, username, email, password, driver_licence, isAdmin});

    return response.status(201).json({status: true, message: 'User was created!'});
  }
}
