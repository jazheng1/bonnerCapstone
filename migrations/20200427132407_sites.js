exports.up = function(knex) {
  return knex.schema.createTable('sites', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('category').notNullable();
    table.text('info').notNullable();
    table.text('job').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.droptable('sites');
};
