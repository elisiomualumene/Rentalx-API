import {Router} from 'express';

const IndexRoutes = Router();


IndexRoutes.get('/', (request, response) => {
  return response.json({'message': 'servidor rodando na porta 3030', 'created by': 'Elisio Mualumene', 'Company': 'unknown'});
});

export {IndexRoutes};
