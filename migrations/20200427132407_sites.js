exports.up = function(knex) {
  return knex.schema.createTable('sites', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('category').notNullable();
    table.text('mission').notNullable();
    table.text('email').notNullable();
    table.text('number');
    table.text('url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('sites');
};
