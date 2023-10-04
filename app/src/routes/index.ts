// Extraindo apenas o módulo Router da biblioteca express
import { Router } from "express";
import productsRouter from "./products.routes";


// Criando uma instancia de Router dentro da constante routes
const routes = Router();

routes.use('/products', productsRouter)


export default routes;