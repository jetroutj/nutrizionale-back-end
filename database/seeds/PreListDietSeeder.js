'use strict'

/*
|--------------------------------------------------------------------------
| PreListDietSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const PreListDiet = use("App/Models/PreListDiet");

class PreListDietSeeder {
  async run () {
    await PreListDiet.createMany([
      {
        name:"Keto",
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
      },
      {
        name:"Vegetariana",
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
      },
      {
        name:"Vegana",
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
      },
      {
        name:"Standard",
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
      }
    ]
      )
  }
}

module.exports = PreListDietSeeder
