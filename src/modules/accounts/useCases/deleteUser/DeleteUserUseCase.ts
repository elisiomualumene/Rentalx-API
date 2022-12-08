import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/User/IUserRepository";
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
export class DeleteUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ){}

    async execute(id: string): Promise<void>{
       await this.userRepository.deleteById(id);

    }
}