"use strict";

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Product = use("App/Models/Product");

class ProductSeeder {
  async run() {
    await Product.createMany([
      {
        name: "Jabon aclarado",
        price: "150",
        serialNumber: "jbn150",
        quantity: 12,
        consulting_room_id: 1,
      },
      {
        name: "Jabon piel grasa",
        price: "180",
        serialNumber: "jbnpg180",
        quantity: 20,
        consulting_room_id: 1,
      },
      {
        name: "Jabón piel seca",
        price: "120",
        serialNumber: "jbnps120",
        quantity: 10,
        consulting_room_id: 1,
      },
      {
        name: "Jabón exfoliante",
        price: "200",
        serialNumber: "jbnex200",
        quantity: 5,
        consulting_room_id: 1,
      },
      {
        name: "Jabón de chocolate",
        price: "220",
        serialNumber: "jbncht220",
        quantity: 15,
        consulting_room_id: 1,
      },
    ]);
  }
}

module.exports = ProductSeeder;
