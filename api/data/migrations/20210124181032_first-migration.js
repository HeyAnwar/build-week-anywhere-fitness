exports.up = async (knex) => {
  await knex.schema
    .createTable('roles', (roles) => {
      roles.increments('role_id')
      roles.string('role_name', 32).notNullable().unique()
    })
    .createTable('users', users => {
      users.increments('user_id')
      users.string('username', 128).notNullable().unique()
      users.string('password', 128).notNullable()
      users.integer('role_id')
        .unsigned()
        .notNullable()
        .references('role_id')
        .inTable('roles')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
    })
    .createTable('classes', classes => {
      classes.increments('class_id')
      classes.string('class_name', 32).notNullable().unique()
      classes.string('type').notNullable()
      classes.integer('time').notNullable()
      classes.integer('duration').notNullable()
      classes.string('intensity').notNullable()
      classes.string('location').notNullable()
      classes.integer('attendees').notNullable()
      classes.integer('class-size').notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('classes')
  .dropTableIfExists('users')
  .dropTableIfExists('roles')
}
