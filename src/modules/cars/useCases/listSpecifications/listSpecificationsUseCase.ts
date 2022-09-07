import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/Specification/implementation/ISpecificationRepository";

class listSpecificationsUseCase{
    constructor(private SpecificationRepository: ISpecificationRepository){}

    execute(): Specification[]{
       const specifications = this.SpecificationRepository.list();

       return specifications;
    };    
}

export { listSpecificationsUseCase };