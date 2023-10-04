// Extraindo apenas o módulo Router da biblioteca express
import { Router } from "express";


// Criando uma instancia de Router dentro da constante routes
const routes = Router();

routes.get('/', (request, response) => {
    // Retornando um json como resposta para requisição get na raiz
    return response.json({
        message: "Hello World!"
    });
});


export default routes;