
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../../../repositories/Specification/implementation/ISpecificationRepository";
import {Repository} from "typeorm"
import { AppDataSource } from '../../../../../../shared/infraestructure/database/index';
import { ISpecificationDTO } from "../../../../types/repositories";

class SpecificationRepository implements ISpecificationRepository{
    private specifications: Repository<Specification>;

     constructor(){
        this.specifications = AppDataSource.getRepository(Specification);
    }
    async create({ name, description }: ISpecificationDTO): Promise<void> {

        const Specification = this.specifications.create({
            name,
            description
        });
        await this.specifications.save(Specification);
    };

    async findByName(name: string): Promise<any> {
        /// SQL -> select * from Specifications where name = name;
        const specification = await this.specifications.findOneBy({ name });

        return specification;
    };

    async list(): Promise<Specification[]>{
        const allRegister = await this.specifications.find();
        return allRegister;
    };
}

export { SpecificationRepository };