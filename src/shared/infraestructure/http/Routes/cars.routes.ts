import { Router } from 'express';
import { CreateCarController } from '../../../../modules/cars/useCases/createCar/CreateCarController';
import { ListCarsController } from '../../../../modules/cars/useCases/listCars/listCarsController';
import { ListByAvailableController } from '../../../../modules/cars/useCases/listByAvailable/ListByAvailableController';
import { CreateCarSpecificationController } from '../../../../modules/cars/useCases/createCarSpecification/createCarSpecificationController';
import { EnsureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carRoutes = Router();

const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();
const listByAvailableController = new ListByAvailableController()
const createCarsSpecifications = new CreateCarSpecificationController()

carRoutes.post('/',ensureAuthenticated, EnsureAdmin, createCarController.handle);
carRoutes.get('/',ensureAuthenticated, EnsureAdmin, listCarsController.handle);
carRoutes.get('/available', ensureAuthenticated, EnsureAdmin, listByAvailableController.handle)
carRoutes.post('/specifications/:id', ensureAuthenticated, EnsureAdmin, createCarsSpecifications.handle)


export { carRoutes };
