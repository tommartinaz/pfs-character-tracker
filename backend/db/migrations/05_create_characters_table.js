exports.up = function(knex, Promise) {
    return knex.schema.createTable('characters', table => {
        table.increments();
        table.string('name').notNullable();
        table.integer('race_id');
        table.integer('class_id');
        table.integer('alignment_id');
        table.integer('level').defaultTo(1);
        table.integer('player_id');
        table.integer('char_num');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('characters')
};
