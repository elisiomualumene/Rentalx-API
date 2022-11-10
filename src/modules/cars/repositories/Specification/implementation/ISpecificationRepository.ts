import { Specification } from "../../../entities/Specification";
import { ISpecificationDTO } from "../../../types/repositories";

interface ISpecificationRepository{
    create({name, description}: ISpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
    list(): Promise<Specification[]>;
}

export {ISpecificationRepository}