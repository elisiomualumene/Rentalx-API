import { ISpecificationRepository } from "../../repositories/Specification/implementation/ISpecificationRepository";

class createSpecificationUseCase{
    constructor(private SpecificationRepository: ISpecificationRepository){}

    execute({ name, description }: IRequest): void{
        const cateogryAlreadyExists = this.SpecificationRepository.findByName(name);

        if(cateogryAlreadyExists) {
            throw new Error("Category Already exists!");
        }

        this.SpecificationRepository.create({name, description});
    };
}

export { createSpecificationUseCase };