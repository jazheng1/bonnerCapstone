exports.up = function(knex) {
  return knex.schema.createTable('opportunities', (table) => {
    table.increments('id').primary();
    table.integer('organizations_id').notNullable().references('organizations.id');
    table.text('description').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('opportunities');
};
