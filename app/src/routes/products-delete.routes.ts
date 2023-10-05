import { Router } from "express";
import connection from "../database/connection";


const productsRouterDelete = Router();

productsRouterDelete.delete('/:id', async (request, response) => {
    const {id} = request.params;

    await connection('products').where('id', id).first().delete();

    return response.json({message: "Produto deletado!"});
})

export default productsRouterDelete;