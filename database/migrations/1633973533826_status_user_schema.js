'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusUserSchema extends Schema {
  up () {
    this.create('status_users', (table) => {
      table.increments('id').primary();
      table.string('name',50);
      table.timestamps()
    })
  }

  down () {
    this.drop('status_users')
  }
}

module.exports = StatusUserSchema
