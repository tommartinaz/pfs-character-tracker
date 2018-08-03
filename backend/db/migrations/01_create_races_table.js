exports.up = function(knex, Promise) {
    return knex.schema.createTable('races', table => {
        table.increments();
        table.string('race').notNullable();
        table.timestamps(true, true)
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('races')
};
