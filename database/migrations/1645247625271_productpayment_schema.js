'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductpaymentSchema extends Schema {
  up () {
    this.create('productpayments', (table) => {
      table.increments('id').primary();
      table.integer('userId');
      table.integer('productId');
      table.integer('cantidad');
      table.string('estado');
      table.timestamps()
    })
  }

  down () {
    this.drop('productpayments')
  }
}

module.exports = ProductpaymentSchema
