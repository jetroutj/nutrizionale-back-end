'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User');

class UserSeeder {
  async run () {
    await User.createMany([
      {
        name:"Administrador",
        lastname:"",
        username:"Admin",
        email:"2117300627@soy.utj.edu.mx",
        phone:"3329255075",
        address:"",
        password:"Admin",
        rfc:"",
        status_user_id:1,
        role_id: 1,
        diet_id: 0,
        consulting_room_id:1
      },
      {
        name:"Jetro Daniel",
        lastname:"Onofre Callea",
        username:"jetroDan",
        email:"jetrodanielonofre@gmail.com",
        phone:"3329255075",
        address:"Centauro 4303",
        password:"Jetro",
        rfc:"",
        status_user_id:1,
        role_id: 2,
        diet_id: 1,
        consulting_room_id:1
      },
      {
        name:"Alejandra",
        lastname:"Covarrubias",
        username:"AleCo",
        email:"alejandra@gmail.com",
        phone:"3309786543",
        address:"",
        password:"Ale123",
        rfc:"",
        status_user_id:1,
        role_id: 2,
        diet_id: 2,
        consulting_room_id:1
      },
      {
        name:"Josstin",
        lastname:"Javier",
        username:"Joss",
        email:"jostin@gmail.com",
        phone:"3312986745",
        address:"",
        password:"Joss123",
        rfc:"",
        status_user_id:1,
        role_id: 2,
        diet_id: 3,
        consulting_room_id:1
      },
      {
        name:"Emma",
        lastname:"Sussana",
        username:"EmmaSus",
        email:"emma@gmail.com",
        phone:"3312794621",
        address:"Tlaquepaque,Jal",
        password:"emma123",
        rfc:"",
        status_user_id:1,
        role_id: 2,
        diet_id: 4,
        consulting_room_id:1
      }
    ])
  }
}

module.exports = UserSeeder
