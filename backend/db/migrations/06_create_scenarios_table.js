exports.up = function(knex, Promise) {
    return knex.schema.createTable('scenarios', table => {
        table.increments();
        table.integer('scenario_num').notNullable();
        table.integer('season');
        table.integer('low_level');
        table.integer('high_level');
        table.text('description');
        table.string('title');
        table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('scenarios')
};
