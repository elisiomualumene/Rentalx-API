import { Specification } from "../../../../../modules/cars/infraestructure/typeorm/entities/Specification";
import { ISpecificationDTO } from "../../../../../modules/cars/types/dtos";
import { ISpecificationRepository } from "../implementation/ISpecificationRepository";

export class SpecificationRepositoryInMemory implements ISpecificationRepository {
    private specifications: Specification[] = [];

    async create({ name, description }: ISpecificationDTO): Promise<Specification> {
        const specification = new Specification()

        Object.assign(specification, {name, description})

        this.specifications.push(specification)

        return specification
    }
    findByName(name: string): Promise<Specification> {
        const specification: any = this.specifications.find((specification) => specification.name === name)

        return specification
    }
    async list(): Promise<Specification[]> {
        const allSpecificiations = this.specifications;

        return allSpecificiations
    }
    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.specifications.filter((specification) => ids.includes(specification.id ?? ''))

        return allSpecifications;
    }
    
}