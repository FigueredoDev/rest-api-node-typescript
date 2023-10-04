import {Knex} from 'knex';

export async function seed(knex: Knex) {
    await knex('products').insert([
        {
            name: "Mochila Explorer",
            description: "Uma mochila resistente e estilosa, perfeita para carregar seus pertences enquanto você explora a cidade.",
            price: 199.99,
            stock: 100,
        },

        {
            name: "Garrafa Térmica Aventureira",
            description: "Mantenha suas bebidas quentes ou frias durante horas com esta garrafa térmica de aço inoxidável.",
            price: 49.99,
            stock: 150,
        },

        {
            name: "Bússola de Bolso",
            description: "Navegue pelas ruas da cidade ou planeje suas rotas de bicicleta com esta bússola compacta.",
            price: 19.99,
            stock: 200,
        },

        {
            name: "Cantil de Titânio",
            description: "Um cantil ultra leve e durável, perfeito para manter-se hidratado durante suas aventuras urbanas.",
            price: 69.99,
            stock: 80,
        },

        {
            name: "Lanterna de Cabeça LED",
            description: "Ilumine seu caminho à noite com esta lanterna de cabeça LED ajustável.",
            price: 29.99,
            stock: 120,
        },

        {
            name: "Protetor Solar Esportivo SPF 50+",
            description: "Mantenha sua pele protegida dos raios UV enquanto você desfruta das atividades ao ar livre na cidade.",
            price: 14.99,
            stock: 250,
        }
    ]);
}