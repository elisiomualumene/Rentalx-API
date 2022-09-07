import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/Specification/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post('/', (request, response) => {
    const {name, description} = request.body;

    const createSpecificationService = new CreateSpecificationService(specificationRepository)

    createSpecificationService.execute({name, description});

    return response.status(201).json({'message': 'Specification was added'})
});

specificationRoutes.get('/', (request, response) => {
    const allSpecifications = specificationRepository.list();

    return response.status(200).json(allSpecifications)
});

export {specificationRoutes};