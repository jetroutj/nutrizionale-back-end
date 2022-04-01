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
              breakfast: "huevos rvueltos con jamón y peregil.",
              interOne: "1 Manzana",
              lunch: "Ensalada de Pollo con piminetos.",
              interTwo: "2 platanos",
              dinner: "Torilla con aguacate con champíñones.",
            },
            tuesday: {
              breakfast: "Queso fresco y pavo.",
              interOne: "2 peras",
              lunch: "Carne de becerro con espinacas.",
              interTwo: "2 peras",
              dinner: "Ensalada de salmón con espinacas."
            },
            wednesday: {
              breakfast: "Dos huevos duros con atún.",
              interOne: "1 pera y 1 manzana",
              lunch: "Espaguetis de calabacín.",
              interTwo: "1 pera y 1 manzana",
              dinner: "Ensalada de aguacate con aceite de oliva."
            },
            thuesday: {
              breakfast: "Queso fresco y un loche de jamón iberíco.",
              interOne: "2 peras",
              lunch: "Carne de cerdo con brócoli.",
              interTwo: "2 peras",
              dinner: "Revuelto de huevos con queso y tocino."
            },
            friday: {
              breakfast: "Sardinas con limón.",
              interOne: "1 pera y 1 manzana",
              lunch: "Mejillonnes con pimientos y cebolla y un chorro limón.",
              interTwo: "1 pera y 1 manzana",
              dinner: "Pollo con espinacas y zanahoria."
            },
            saturday: {
              breakfast: "Huevos revueltos.",
              interOne: "2 peras",
              lunch: "Carne de ternera con salsa de boletus.",
              interTwo: "2 peras",
              dinner: "Carne de ternera con salsa de boletus."
            },
            sunday: {
              breakfast: "Torilla con pavo.",
              interOne: "libre",
              lunch: "Pescado a la parrilla con verduras.",
              interTwo: "libre",
              dinner: "Ensalada de lechuga, espinacas y rúcula."
            },
            routine: {
              monday: "Cardio: caminando o trotando por 2 kilometros.",
              tuesday:"Levantamiento de pesas: Durante poco tiempo pero algo de peso.",
              wednesday:"Estiramiento de musculos: Realizar estiramiento durante 10 a 20 minutos.",
              thuesday:"20 flexiones, 20 sentadillas, 20 dominadas",
              friday:"Cardio: caminando o trotando por 2 kilometros.",
              saturday:"Estiramiento de musculos: Realizar estiramiento durante 10 a 20 minutos.",
              sunday:"Dia libre."
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
              monday: "Cardio: caminando o trotando por 2 kilometros.",
              tuesday:"Levantamiento de pesas: Durante poco tiempo pero algo de peso.",
              wednesday:"Estiramiento de musculos: Realizar estiramiento durante 10 a 20 minutos.",
              thuesday:"20 flexiones, 20 sentadillas, 20 dominadas",
              friday:"Cardio: caminando o trotando por 2 kilometros.",
              saturday:"Estiramiento de musculos: Realizar estiramiento durante 10 a 20 minutos.",
              sunday:"Dia libre."
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
              monday: "Cardio: caminando o trotando por 2 kilometros.",
              tuesday:"Levantamiento de pesas: Durante poco tiempo pero algo de peso.",
              wednesday:"Estiramiento de musculos: Realizar estiramiento durante 10 a 20 minutos.",
              thuesday:"20 flexiones, 20 sentadillas, 20 dominadas",
              friday:"Cardio: caminando o trotando por 2 kilometros.",
              saturday:"Estiramiento de musculos: Realizar estiramiento durante 10 a 20 minutos.",
              sunday:"Dia libre."
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
              monday: "Cardio: caminando o trotando por 2 kilometros.",
              tuesday:"Levantamiento de pesas: Durante poco tiempo pero algo de peso.",
              wednesday:"Estiramiento de musculos: Realizar estiramiento durante 10 a 20 minutos.",
              thuesday:"20 flexiones, 20 sentadillas, 20 dominadas",
              friday:"Cardio: caminando o trotando por 2 kilometros.",
              saturday:"Estiramiento de musculos: Realizar estiramiento durante 10 a 20 minutos.",
              sunday:"Dia libre."
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
