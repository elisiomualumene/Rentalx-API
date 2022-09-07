import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifications";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {return CreateSpecificationController.handle(request, response)});

specificationRoutes.get('/', (request, response) => {return ListSpecificationsController.handle(request, response) });

export {specificationRoutes};