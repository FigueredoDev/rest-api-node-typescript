// Extraindo apenas o módulo Router da biblioteca express
import { Router } from "express";
import productsRouterGetAll from "./products-get-all.routes";
import productsRouterGetId from "./products-get-id.routes";


// Criando uma instancia de Router dentro da constante routes
const routes = Router();

routes.use('/products', productsRouterGetAll)
routes.use('/products/search', productsRouterGetId)


export default routes;