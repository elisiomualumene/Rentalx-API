import { Specification } from "../../../entities/Specification";

interface ISpecificationRepository{
    create({name, description}: ISpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
    list(): Promise<Specification[]>;
}

export {ISpecificationRepository}