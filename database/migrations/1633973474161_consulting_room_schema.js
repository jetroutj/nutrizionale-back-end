'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsultingRoomSchema extends Schema {
  up () {
    this.create('consulting_rooms', (table) => {
      table.increments('id').primary()
      // table.integer('user_id')
      // table.integer('product_id');
      // table.integer('status_user_id');
      // table.integer('role_id')
      // table.integer('appoiment_id');
      table.string('name',50)
      table.string('address',50)
      table.string('phone',15)
      table.string('email', 254).notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('consulting_rooms')
  }
}

module.exports = ConsultingRoomSchema
