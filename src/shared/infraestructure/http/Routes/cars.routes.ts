import { Router } from 'express';
import { CreateCarController } from '../../../../modules/cars/useCases/createCar/CreateCarController';
import { ListCarsController } from '../../../../modules/cars/useCases/listCars/listCarsController';
import { EnsureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carRoutes = Router();

const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();

carRoutes.post('/',ensureAuthenticated, EnsureAdmin, createCarController.handle);
carRoutes.get('/',ensureAuthenticated, EnsureAdmin, listCarsController.handle);


export { carRoutes };
