import { User } from "../../../entities/User";
import { IUserRepository } from "../IUserRepository";



class UserRepositoryInMemory implements IUserRepository{
    private Users: User[] = []

    async create({driver_licence,email,isAdmin,name,password,username,id}: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {  
            driver_licence,
            email,
            isAdmin,
            name,
            password,
            username,
            id
        })
        
        this.Users.push(user);
    }
    async list(): Promise<User[]> {
        const allUsers = this.Users;
        return allUsers;
    }
    async findByEmail(email: string): Promise<User> {
        return this.Users.find((user) => user.email === email);
        
    }
    async deleteById(id: string): Promise<void> {

    }
    async findById(id: string): Promise<User> {
        return this.Users.find((user) => user.id === id)
    }
    
}

export {UserRepositoryInMemory}