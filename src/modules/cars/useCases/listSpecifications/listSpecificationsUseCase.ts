import { Specification } from "../../infraestructure/typeorm/entities/Specification";
import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/Specification/implementation/ISpecificationRepository";

@injectable()
class listSpecificationsUseCase{
    constructor(
        @inject("RepositorySpecification")
        private SpecificationRepository: ISpecificationRepository){}

    async execute(): Promise<Specification[]>{
       const specifications = await this.SpecificationRepository.list();

       return specifications;
    };    
}

export { listSpecificationsUseCase };