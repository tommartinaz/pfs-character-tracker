
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', table => {
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.integer('pfs_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};
