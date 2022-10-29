import { Category } from "../../entities/Category";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "./implementation/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository{
    private specifications: Specification[];

    private static INSTANCE: ISpecificationRepository;

    private constructor(){
        this.specifications = [];
    }

    public static getInstance(): ISpecificationRepository {
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    }

    create({ name, description }: ISpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    };

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);

        return specification;
    };

    list(): Specification[]{
        return this.specifications
    };
}

export { SpecificationRepository };