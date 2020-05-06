
exports.up = function(knex) {
  return knex.schema.createTable('tb_task', function (table){
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('priority').notNullable();
    table.string('responsavel').notNullable();

    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('tb_users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tb_task');
};
