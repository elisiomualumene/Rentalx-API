import {Router} from 'express';
import {AuthenticateUserController} from '../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const authenticateUserControlller = new AuthenticateUserController();


authenticateRoutes.post('/sessions', authenticateUserControlller.handle);

export {authenticateRoutes};
