import { Router } from "express";
import connection from "../database/connection";


const productsRouterGetAll = Router();

productsRouterGetAll.get('/', async (request, response) => {
    const products = await connection('products').select('*')

    return response.json(products);
});


export default productsRouterGetAll;