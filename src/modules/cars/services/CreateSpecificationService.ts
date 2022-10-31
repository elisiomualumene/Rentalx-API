import { ISpecificationRepository } from "../repositories/Specification/implementation/ISpecificationRepository";

class CreateSpecificationService{
    constructor(private specificationRepository: ISpecificationRepository){}
    
    execute({name, description}: IRequest): void{

        const specificationAlreadyExists = this.specificationRepository.findByName(name)

        if(specificationAlreadyExists){
            throw new Error('Specification Already Exists!')
        }


        this.specificationRepository.create({name, description})
    };
}

export {CreateSpecificationService};



// Arquitetura De Design de Sistemas -> S.O.L.I.D

/*
    S -> Sigle Responsability Principle;
    O ->  Open Close Principle;
    L -> Liskov Subsitute Principle
    I _>  
*/