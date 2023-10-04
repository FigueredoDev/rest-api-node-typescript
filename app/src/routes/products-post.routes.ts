import { Router } from "express";
import connection from "../database/connection";

const productsRouterPost = Router();

productsRouterPost.post('/', async (request, response) => {
    const {
        name,
        description,
        price,
        stock
    } = request.body;

    const product = {
        name,
        description,
        price,
        stock
    };

    await connection('products').insert(product)

    return response.json(product);
});

export default productsRouterPost;