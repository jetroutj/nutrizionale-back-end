'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppoinmnetsSchema extends Schema {
  up () {
    this.create('appoinmnets', (table) => {
      table.increments('id').primary()
      table.integer('user_id')
      table.integer('consulting_room_id');
      table.string('motive',500)
      table.date('date')
      table.string('schedule',500)
      table.timestamps()
    })
  }

  down () {
    this.drop('appoinmnets')
  }
}

module.exports = AppoinmnetsSchema
