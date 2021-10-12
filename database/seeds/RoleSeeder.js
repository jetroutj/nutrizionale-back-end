'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use ('App/Models/User')


class RoleSeeder {
  async run () {
    await Role.createMany(
      [
        {
          name:"Admin"
        },
        {
          name:"User"
        }
      ])
  }
}

module.exports = RoleSeeder
