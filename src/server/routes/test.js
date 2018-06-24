
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.send('Hola Mundo!'));

export default routes;
