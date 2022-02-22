'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PreListDietSchema extends Schema {
  up () {
    this.create('pre_list_diets', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.json('weekOne');
      table.json('weekTwo');
      table.json('weekThree');
      table.json('weekFour');
      table.timestamps()
    })
  }

  down () {
    this.drop('pre_list_diets')
  }
}

module.exports = PreListDietSchema
