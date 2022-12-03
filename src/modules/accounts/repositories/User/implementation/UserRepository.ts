import { IUserRepository } from "../IUserRepository";
import { Repository } from 'typeorm';
import { User } from "../../../entities/User";
import { AppDataSource } from "../../../../../database";

class UserRepository implements IUserRepository {
    private repository: Repository<User>
    
    constructor(){
        this.repository = AppDataSource.getRepository(User)
    }

    async create({name, username, email, password, driver_licence, isAdmin, id, avatar}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name, 
            username, 
            email, 
            password, 
            driver_licence, 
            isAdmin,
            id,
            avatar
        });

        await this.repository.save(user);
    }


    async list(): Promise<User[]> {
        const allUsers = await this.repository.find();

        return allUsers;
    }


    async findByEmail(email: string): Promise<any> {
        const user = await this.repository.findOneBy({email})

        return user
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id)
    }

    async findById(id: string): Promise<any> {
        const userById = await this.repository.findOneBy({id})

        return userById;
    }
    
}

export { UserRepository };