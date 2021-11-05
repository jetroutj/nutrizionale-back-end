'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments('id').primary()
      table.integer('consulting_room_id');
      table.string('name',50)
      table.string('price',50)
      table.string('serialNumber',50)
      table.integer('quantity',10)
      table.boolean('estado')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
