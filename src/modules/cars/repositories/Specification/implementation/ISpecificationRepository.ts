import {Specification} from '../../../infraestructure/typeorm/entities/Specification';
import {ISpecificationDTO} from '../../../types/dtos';

interface ISpecificationRepository{
    create({name, description}: ISpecificationDTO): Promise<Specification>;
    findByName(name: string): Promise<Specification>;
    list(): Promise<Specification[]>;
    findByIds(ids: string[]): Promise<Specification[]>;
}

export {ISpecificationRepository};
