'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DietSchema extends Schema {
  up () {
    this.create('diets', (table) => {
      table.increments('id').primary()
      table.integer('user_id');
      // table.integer('product_id');
      // table.integer('status_user_id');
      // table.integer('role_id');
      table.integer('appoiment_id');
      table.string('disease',300);
      table.string('weight',50);
      table.string('size',50);
      table.string('age',50);
      table.string('allergy',500);
      table.string('plan',1000);
      table.timestamps()
    })
  }

  down () {
    this.drop('diets')
  }
}

module.exports = DietSchema
