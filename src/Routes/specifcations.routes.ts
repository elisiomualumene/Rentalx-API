import { Router } from "express";
//import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifications";
//import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications";

import { 
    createSpecificationController 
} from "../modules/cars/useCases/createSpecifications/createSpecificationController";
import { 
    listSpecificationsController 
} from "../modules/cars/useCases/listSpecifications/listSpecifications.controller";

const specificationRoutes = Router();

const CreateSpecificationController = new createSpecificationController();
const ListSpecificationController = new listSpecificationsController();


specificationRoutes.post('/', CreateSpecificationController.handle);

specificationRoutes.get('/', ListSpecificationController.handle);

export {specificationRoutes};