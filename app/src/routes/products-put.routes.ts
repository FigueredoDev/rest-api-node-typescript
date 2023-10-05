import { Router } from "express";
import connection from "../database/connection";


const productsRouterPut = Router();

productsRouterPut.put('/:id', async (request, response) => {
    const {id} = request.params;

    const {name, description, price, stock} = request.body;

    const product = {
        name,
        description,
        price,
        stock
    };

    await connection('products').where('id', id).first().update(product);

    return response.json(product);
})

export default productsRouterPut;