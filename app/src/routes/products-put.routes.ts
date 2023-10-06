import { Router } from "express";
import connection from "../database/connection";


const productsRouterPut = Router();

productsRouterPut.put('/:id', async (request, response) => {
    const {id} = request.params;

    const {name, description, price, stock} = request.body;

    // Verificação de preenchimento de nome do produto
    if(name == null){
        return response.json({message: "É obrigatório informar um nome para o produto."})
    }

    // Tratamento do preço do produto
    if(price == null){
        return response.json({message: "É obrigatório informar um preço para o produto."})
    }
    else if(price <= 0){
        return response.json({message: "O preço do produto deve ser um valor positivo."})
    }

    // Tratamento do estoque
    if(stock == null){
        return response.json({message: "É obrigatório informar a quantidade em estoque."})
    }
    else if(stock <= 0){
        return response.json({message: "O estoque do produto deve ter um valor positivo."})
    }
    else if(!Number.isInteger(stock)){
        return response.json({message: "O valor inserido no campo do estoque deve ser um número inteiro."})
    }

    // Tratamento do limite de caracteres na descrição do produto
    if(description.length > 500){
        return response.json({message: "A descrição não pode ter mais que 500 caracteres."});
    };

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