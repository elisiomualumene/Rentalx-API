
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "./implementation/ISpecificationRepository";
import {Repository} from "typeorm"
import { AppDataSource } from '../../../../database/index';

class SpecificationRepository implements ISpecificationRepository{
    // private specifications: Specification[];
    private specifications: Repository<Specification>;
    //private static INSTANCE: ISpecificationRepository;

     constructor(){
        //this.specifications = [];
        this.specifications = AppDataSource.getRepository(Specification);
    }

    // public static getInstance(): ISpecificationRepository {
    //     if(!SpecificationRepository.INSTANCE){
    //         SpecificationRepository.INSTANCE = new SpecificationRepository();
    //     }
    //     return SpecificationRepository.INSTANCE;
    // }

    async create({ name, description }: ISpecificationDTO): Promise<void> {
        // const specification = new Specification();

        // Object.assign(specification, {
        //     name,
        //     description,
        //     created_at: new Date(),
        // });

        const Specification = this.specifications.create({
            name,
            description
        });

        //this.specifications.push(specification);
        await this.specifications.save(Specification);
    };

    async findByName(name: string): Promise<any> {
        // const specification = this.specifications.find(specification => specification.name === name);

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