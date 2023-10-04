import express, { request, response } from "express"; // Importando o módulo express, para o gerenciamento de rotas e outros...
import routes from "./routes"; // Importando a constante routes, responsável pela nossa rota get


// Instanciando o express para a constante app
const app = express();

// Configurando o express para trabalhar com json
app.use(express.json());

// Utilizando a rota de requisição GET criada no arquivo index.ts
app.use(routes)

// Configurando a porta onde minha API irá rodar
app.listen(3333, () => {
    // Utilizando uma arrow function para mandar o uma mensagem pro terminal do servidor informando que o server está on
    console.log("📌 Beckend started on port 3333 👌")
})