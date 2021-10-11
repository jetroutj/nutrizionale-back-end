'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppoinmnetsSchema extends Schema {
  up () {
    this.create('appoinmnets', (table) => {
      table.increments('id').primary()
      table.string('motive',200)
      table.date('date')
      table.date('schedule')
      table.timestamps()
    })
  }

  down () {
    this.drop('appoinmnets')
  }
}

module.exports = AppoinmnetsSchema
