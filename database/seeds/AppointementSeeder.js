'use strict'

/*
|--------------------------------------------------------------------------
| AppointementSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Appointement = use('App/Models/Appointement')

class AppointementSeeder {
  async run () {
    await Appointement.createMany([
      {
        motive:"",
        
      }
    ])
  }
}

module.exports = AppointementSeeder
