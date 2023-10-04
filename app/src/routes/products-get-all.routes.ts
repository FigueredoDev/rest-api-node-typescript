// Extraindo apenas o módulo Router da biblioteca express
import { Router } from "express";
import connection from "../database/connection";


// Criando uma instancia de Router dentro da constante routes
const productsRouterGetAll = Router();

productsRouterGetAll.get('/', async (request, response) => {
    const products = await connection('products').select('*')

    // Retornando um json como resposta para requisição get na raiz
    return response.json(products);
});


export default productsRouterGetAll;