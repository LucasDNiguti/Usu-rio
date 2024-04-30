import { Router } from 'express';
import usuarioController from './Usuario/Controller/usuario.controller';

const routes = Router();

routes.post('/usuarios', usuarioController.create)
routes.get('/usuarios', usuarioController.findAll)
routes.get('/usaurios/:id', usuarioController.findById)
routes.put('/usuarios/:id', usuarioController.update)
routes.delete('/usaurios/:id', usuarioController.delete)

export { routes }