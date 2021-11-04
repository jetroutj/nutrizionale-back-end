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
const Appoinmnet = use('App/Models/Appoinmnet')

class AppoinmnetSeeder {
  async run () {
    await Appoinmnet.createMany([
      {
        user_id:2,
        consulting_room_id:1,
        motive:"Gordo",
        date:"2021-11-05 11:36:52",
        schedule:"tarde"
        
      },
      {
        user_id:3,
        consulting_room_id:1,
        motive:"Cita",
        date:"2021-11-10 11:36:52",
        schedule:"tarde"
        
      },
      {
        user_id:4,
        consulting_room_id:1,
        motive:"Alta",
        date:"2021-11-13 11:36:52",
        schedule:"tarde"
        
      }
    ])
  }
}

module.exports = AppoinmnetSeeder
