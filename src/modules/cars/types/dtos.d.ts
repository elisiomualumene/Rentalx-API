import { Specification } from '../../../modules/cars/infraestructure/typeorm/entities/Specification';
// DTO = Data Transfer Object

export interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export interface ISpecificationDTO {
    name: string;
    description: string;
}

export interface ICreateCarDTO {
    name: string;
    description: string;
    daily_rate: number;
    licence_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
    specifications?: Specification[];
    id?: string;
}
