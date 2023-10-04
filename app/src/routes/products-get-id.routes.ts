import { Router } from "express";
import connection from "../database/connection";

const productsRouterGetId = Router();


productsRouterGetId.get('/', async (request, response) => {
    const { id } = request.query;

    try {
        if(id){
            let selectedProduct = await connection('products').where('id', id).first()

            if(!selectedProduct){
                return response.status(400).json({ error: 'Product not found!' });
            }
        }
        
        const results = id
        ?await connection('products').where('id', id).first()
        :{message: "Informe um ID para filtrar algum produto"};

        return response.json(results);
    }

    catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Erro interno do servidor' });
    }

});

export default productsRouterGetId;