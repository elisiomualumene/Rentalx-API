import { SpecificationRepository } from "../../repositories/Specification/SpecificationRepository";
import { createSpecificationController } from "./createSpecificationController";
import { createSpecificationUseCase } from "./createSpecificationUseCase";

const specificationRepository = new SpecificationRepository;

const CreateSpecificationUseCase = new createSpecificationUseCase(specificationRepository)

const CreateSpecificationController = new createSpecificationController(CreateSpecificationUseCase)

export { CreateSpecificationController }