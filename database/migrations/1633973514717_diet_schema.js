'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DietSchema extends Schema {
  up () {
    this.create('diets', (table) => {
      table.increments('id').primary()
      table.integer('user_id');
      table.string('disease',300);
      table.string('weight',50);
      table.string('size',50);
      table.string('age',50);
      table.string('allergy',500);
      table.string('calories',1000);
      table.string('typeDiet',1000);
      table.string('imc',50);
      table.string('stateWeight',50);
      table.string('gender',50);
      table.string('estado');
      table.json('date');
      table.json('weekOne');
      table.json('weekTwo');
      table.json('weekThree');
      table.json('weekFour');

  
      table.timestamps()
    })
  }

  down () {
    this.drop('diets')
  }
}

module.exports = DietSchema
