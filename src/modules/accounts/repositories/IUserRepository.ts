import { User } from "../entities/User";

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>;
    list(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    deleteById(id: string): Promise<void>;
    findById(id: string): Promise<User>;
}

export { IUserRepository };