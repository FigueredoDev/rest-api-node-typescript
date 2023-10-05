// Extraindo apenas o módulo Router da biblioteca express
import { Router } from "express";
import productsRouterGetAll from "./products-get-all.routes";
import productsRouterGetId from "./products-get-id.routes";
import productsRouterPost from "./products-post.routes";
import productsRouterPut from "./products-put.routes";
import productsRouterDelete from "./products-delete.routes";


// Criando uma instancia de Router dentro da constante routes
const routes = Router();

routes.use('/products', productsRouterGetAll)
routes.use('/products/search', productsRouterGetId)
routes.use('/products', productsRouterPost)
routes.use('/products', productsRouterPut)
routes.use('/products', productsRouterDelete)


export default routes;