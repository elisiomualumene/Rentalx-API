import { SpecificationRepository } from "../../repositories/Specification/SpecificationRepository";
import { listSpecificationsUseCase } from "./listSpecificationsUseCase";
import { listSpecificationsController } from "./listSpecifications.controller";

const specificationRepository = new SpecificationRepository;
const ListSpecificationsUseCase = new listSpecificationsUseCase(specificationRepository)
const ListSpecificationsController = new listSpecificationsController(ListSpecificationsUseCase)

export {ListSpecificationsController}