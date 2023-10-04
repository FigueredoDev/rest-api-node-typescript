// Extraindo apenas o módulo Router da biblioteca express
import { Router } from "express";
import productsRouterGetAll from "./products-get-all.routes";


// Criando uma instancia de Router dentro da constante routes
const routes = Router();

routes.use('/products', productsRouterGetAll)


export default routes;