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
        disease:"Ninguna",
        weight:"20",
        size:"50",
        age:"25",
        allergy:"No",
        plan:"l;askdf;ka;'slkf;lkd;skf;kas;ldk;'fa'dskdl;fas'",
        user_id:2
        
      }
    ])
  }
}

module.exports = DietSeeder
