"use strict";

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
const Factory = use("Factory");
const Diet = use("App/Models/Diet");
class DietSeeder {
  async run() {
    await Diet.createMany([
      {
        disease:"Ninguna",
        weight:"80",
        size:"1.70",
        age:"23",
        allergy:"No",
        imc:"27.68",
        stateWeight:"Sobrepeso",
        gender:"Hombre",
        calories:"1200",
        typeDiet:"Standard",
        date:JSON.stringify({
          startDate:"2021-11-15T06:00:00.000Z",
          endDate:"2021-12-06T06:00:00.000Z"
        }),
        weekOne: JSON.stringify(
          {
            monday: {
              breakfast: "buebito a la mexicana",
              interOne: "1 Manzana",
              lunch: "3 Tacos de asada",
              interTwo: "2 platanos",
              dinner: "Chuleta con verduras al vapor",
            },
            tuesday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            wednesday: {
              breakfast: "Chuleta con ensalada",
              interOne: "1 pera y 1 manzana",
              lunch: "pechuga de pollo",
              interTwo: "1 pera y 1 manzana",
              dinner: "1 sandwich"
            },
            thuesday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            friday: {
              breakfast: "Chuleta con ensalada",
              interOne: "1 pera y 1 manzana",
              lunch: "pechuga de pollo",
              interTwo: "1 pera y 1 manzana",
              dinner: "1 sandwich"
            },
            saturday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            sunday: {
              breakfast: "libre",
              interOne: "libre",
              lunch: "libre",
              interTwo: "libre",
              dinner: "libre"
            },
            routine: {
              monday: "2 kilometros trtando",
              tuesday:"1000 lagartijas",
              wednesday:"500 sentadillas",
              thuesday:"200 abdominales",
              friday:"2 horas de natación",
              saturday:"1 hora de caminata",
              sunday:"descanso"
            }
          }),
        weekTwo: JSON.stringify(
          {
            monday: {
              breakfast: "buebito a la mexicana",
              interOne: "1 Manzana",
              lunch: "3 Tacos de asada",
              interTwo: "2 platanos",
              dinner: "Chuleta con verduras al vapor",
            },
            tuesday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            wednesday: {
              breakfast: "Chuleta con ensalada",
              interOne: "1 pera y 1 manzana",
              lunch: "pechuga de pollo",
              interTwo: "1 pera y 1 manzana",
              dinner: "1 sandwich"
            },
            thuesday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            friday: {
              breakfast: "Chuleta con ensalada",
              interOne: "1 pera y 1 manzana",
              lunch: "pechuga de pollo",
              interTwo: "1 pera y 1 manzana",
              dinner: "1 sandwich"
            },
            saturday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            sunday: {
              breakfast: "libre",
              interOne: "libre",
              lunch: "libre",
              interTwo: "libre",
              dinner: "libre"
            },
            routine: {
              monday: "2 kilometros trtando",
              tuesday:"1000 lagartijas",
              wednesday:"500 sentadillas",
              thuesday:"200 abdominales",
              friday:"2 horas de natación",
              saturday:"1 hora de caminata",
              sunday:"descanso"
            }
          }),
        weekThree: JSON.stringify(
          {
            monday: {
              breakfast: "buebito a la mexicana",
              interOne: "1 Manzana",
              lunch: "3 Tacos de asada",
              interTwo: "2 platanos",
              dinner: "Chuleta con verduras al vapor",
            },
            tuesday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            wednesday: {
              breakfast: "Chuleta con ensalada",
              interOne: "1 pera y 1 manzana",
              lunch: "pechuga de pollo",
              interTwo: "1 pera y 1 manzana",
              dinner: "1 sandwich"
            },
            thuesday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            friday: {
              breakfast: "Chuleta con ensalada",
              interOne: "1 pera y 1 manzana",
              lunch: "pechuga de pollo",
              interTwo: "1 pera y 1 manzana",
              dinner: "1 sandwich"
            },
            saturday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            sunday: {
              breakfast: "libre",
              interOne: "libre",
              lunch: "libre",
              interTwo: "libre",
              dinner: "libre"
            },
            routine: {
              monday: "2 kilometros trtando",
              tuesday:"1000 lagartijas",
              wednesday:"500 sentadillas",
              thuesday:"200 abdominales",
              friday:"2 horas de natación",
              saturday:"1 hora de caminata",
              sunday:"descanso"
            }
          }),
        weekFour:JSON.stringify(
          {
            monday: {
              breakfast: "buebito a la mexicana",
              interOne: "1 Manzana",
              lunch: "3 Tacos de asada",
              interTwo: "2 platanos",
              dinner: "Chuleta con verduras al vapor",
            },
            tuesday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            wednesday: {
              breakfast: "Chuleta con ensalada",
              interOne: "1 pera y 1 manzana",
              lunch: "pechuga de pollo",
              interTwo: "1 pera y 1 manzana",
              dinner: "1 sandwich"
            },
            thuesday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            friday: {
              breakfast: "Chuleta con ensalada",
              interOne: "1 pera y 1 manzana",
              lunch: "pechuga de pollo",
              interTwo: "1 pera y 1 manzana",
              dinner: "1 sandwich"
            },
            saturday: {
              breakfast: "buebito con jamón",
              interOne: "2 peras",
              lunch: "Filete de res, con panela y verduras",
              interTwo: "2 peras",
              dinner: "Chuleta con verduras al vapor"
            },
            sunday: {
              breakfast: "libre",
              interOne: "libre",
              lunch: "libre",
              interTwo: "libre",
              dinner: "libre"
            },
            routine: {
              monday: "2 kilometros trtando",
              tuesday:"1000 lagartijas",
              wednesday:"500 sentadillas",
              thuesday:"200 abdominales",
              friday:"2 horas de natación",
              saturday:"1 hora de caminata",
              sunday:"descanso"
            }
          }),
        user_id: 4,
      },
    ]);
  }
}

module.exports = DietSeeder;
