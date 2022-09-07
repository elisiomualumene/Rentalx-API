import { SpecificationRepository } from "../../repositories/Specification/SpecificationRepository";
import { createSpecificationController } from "./createSpecification.controller";
import { createSpecificationUseCase } from "./createSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const CreateSpecificationUseCase = new createSpecificationUseCase(specificationRepository)

const CreateSpecificationController = new createSpecificationController(CreateSpecificationUseCase)

export { CreateSpecificationController }