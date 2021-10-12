'use strict'

/*
|--------------------------------------------------------------------------
| StatusUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const StatusUser = use ('App/Models/StatusUser')

class StatusUserSeeder {
  async run () {
    await StatusUser.createMany(
      [
        {
        name:"Activo"  
        },
        {
        name:"Inactivo"
        }
      ])
  }
}

module.exports = StatusUserSeeder
