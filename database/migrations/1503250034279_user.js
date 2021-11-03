'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('id').primary()
      table.integer('status_user_id')
      table.integer('role_id');
      table.integer('appoiment_id');
      table.integer('consulting_room_id');
      table.string('name',50);
      table.string('email', 254).notNullable().unique();
      table.string('lastname',50)
      table.string('username',50)
      table.string('phone',50)
      table.string('address',50)
      table.string('password',200)
      table.string('rfc',30)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
