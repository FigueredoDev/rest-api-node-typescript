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

    // Verificação de preenchimento de nome do produto
    if(name == null){
        return response.json({message: "É obrigatório informar um nome para o produto."})
    }

    // verificação de produto já cadastrado
    const selected = await connection('products').where('name', name).first()

    if(selected == null){}
    else if(name == selected.name){
        return response.json({message: "Produto já cadastrado."})
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


    // Tratamento do limite de caracteres para descrição do produto
    const product = description.length <= 500
    ?{
        name,
        description,
        price,
        stock
    }
    : false;

    if(product != false){
        await connection('products').insert(product)
        return response.json(product);
    }
    
    else if(product == false){
         let status = {message: "A descrição não pode ter mais que 500 caracteres."};
         return response.json(status);
    } 
});

export default productsRouterPost;