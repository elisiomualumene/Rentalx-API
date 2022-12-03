import { AppError } from './../../../../errors/AppError';
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/User/IUserRepository";
import  { hash }  from "bcrypt";

@injectable()
export class CreateUserUseCase {

    constructor(
        @inject("UserRepository")
        private usersRepository: IUserRepository
    ){}

    async execute({name, username, email, driver_licence, isAdmin, password}: ICreateUserDTO): Promise<void>{

        const userAlreadyExists = await this.usersRepository.findByEmail(email)

        if(userAlreadyExists){
            throw new AppError("user already exists")
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name, 
            username, 
            email, 
            driver_licence, 
            isAdmin, 
            password: passwordHash
        })
    }
}