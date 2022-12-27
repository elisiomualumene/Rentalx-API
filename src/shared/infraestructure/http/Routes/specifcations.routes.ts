import {Router} from 'express';
import {ensureAuthenticated} from '../middlewares/ensureAuthenticated';

import {
  createSpecificationController,
} from '../../../../modules/cars/useCases/createSpecifications/createSpecificationController';
import {
  listSpecificationsController,
} from '../../../../modules/cars/useCases/listSpecifications/listSpecifications.controller';

const specificationRoutes = Router();

const CreateSpecificationController = new createSpecificationController();
const ListSpecificationController = new listSpecificationsController();

specificationRoutes.post('/',ensureAuthenticated, CreateSpecificationController.handle);

specificationRoutes.get('/',ensureAuthenticated, ListSpecificationController.handle);

export {specificationRoutes};
