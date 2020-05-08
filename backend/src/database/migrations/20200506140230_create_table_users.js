//npx knex migrate:make nomeDaMigration

exports.up = function(knex) {
  return knex.schema.createTable('tb_users', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tb_users');
};
