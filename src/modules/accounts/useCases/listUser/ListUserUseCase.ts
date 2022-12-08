import { inject, injectable } from "tsyringe";
import { User } from "../../infraestructure/typeorm/entities/User";
import { IUserRepository } from "../../repositories/User/IUserRepository";

@injectable()
export class ListUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ){}

    async execute(): Promise<User[]>{
        const allUsers = await this.userRepository.list()

        return allUsers;
    }
}