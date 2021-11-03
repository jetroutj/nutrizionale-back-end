'use strict'

/*
|--------------------------------------------------------------------------
| DietSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Diet = use('App/Models/Diet');
class DietSeeder {
  async run () {
    await Diet.createMany([
      {
        disease:"",
        weight:"",
        size:"",
        age:"",
        allergy:"",
        plan:"",
        user_id:1,
        
      }
    ])
  }
}

module.exports = DietSeeder
