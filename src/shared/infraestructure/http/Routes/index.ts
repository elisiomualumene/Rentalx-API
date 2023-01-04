import {Router} from 'express';
import {categoriesRoutes} from './categories.routes';
import {IndexRoutes} from './index.routes';
import {specificationRoutes} from './specifcations.routes';
import {userRoutes} from './user.routes';
import {authenticateRoutes} from './authenticate.routes';
import {carRoutes} from './cars.routes';
import { RentalRoutes } from './rental.routes';

const router = Router();

router.use('/', IndexRoutes);
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);
router.use('/user', userRoutes);
router.use(authenticateRoutes);
router.use('/cars', carRoutes);
router.use('/rental', RentalRoutes)

export {router};
