import {Knex} from 'knex';

// Criar tabela
export async function up(knex: Knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.float('price').notNullable();
        table.integer('stock').notNullable();
    });
};

// Deletar tabela
export async function down(knex: Knex) {
    return knex.schema.dropTable('locations');
};