'use strict'

/*
|--------------------------------------------------------------------------
| ConsultingRoomSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const ConsultingRoom = use('App/Models/ConsultingRoom')
class ConsultingRoomSeeder {
  async run () {
    await ConsultingRoom.createMany([
      // {
      //   name:"Nutrizionale",
      //   address:"Quetzalcoatl 4055 Jardines Del Sol, Zapopan",
      //   phone:"33 1303 8526",
      //   email:"nutrizionalespa@gmail.com"
      // }
    ])
  }
}

module.exports = ConsultingRoomSeeder
