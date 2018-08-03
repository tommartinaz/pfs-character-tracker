
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scenario2player', (table) => {
      table.increments();
      table.integer('scenario_id').references('id').inTable('scenarios');
      table.integer('player_id').references('id').inTable('players');
      table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scenario2Player');
};
