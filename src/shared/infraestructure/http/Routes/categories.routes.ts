import {Router} from 'express';
import {CreateCategoryController} from '../../../../modules/cars/useCases/createCategories/createCategoryController';
import {ListCategoriesController} from '../../../../modules/cars/useCases/listCategories/ListCategoriesController';
import multer from 'multer';
import {ImportCategoryController} from '../../../../modules/cars/useCases/importCategory/ImportCategoryController';

import upload from '../../../../config/upload';

const uploadCategory = multer(upload('./tmp'));

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

const categoriesRoutes = Router();


categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/import', uploadCategory.single('file'), importCategoryController.handle);

export {categoriesRoutes};
