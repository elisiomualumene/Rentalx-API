import { Specification } from "../../../model/Specification";

interface ISpecificationRepository{
    create({name, description}: ISpecificationDTO): void;
    findByName(name: string): Specification;
    list(): Specification[]
}

export {ISpecificationRepository}