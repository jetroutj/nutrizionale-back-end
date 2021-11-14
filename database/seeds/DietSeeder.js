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
        disease: "Ninguna",
        weight: "20",
        size: "50",
        age: "25",
        allergy: "No",
        weekOne: JSON.stringify(
          {
            monday: {
              breakfast: "",
              interOne: "",
              lunch: "",
              interTwo: "",
              dinner: "",
            },
            tuesday: {
              breakfast: "",
              interOne: "",
              lunch: "",
              interTwo: "",
              dinner: ""
            },
            wednesday: {
              breakfast: "",
              interOne: "",
              lunch: "",
              interTwo: "",
              dinner: ""
            },
            thuesday: {
              breakfast: "",
              interOne: "",
              lunch: "",
              interTwo: "",
              dinner: ""
            },
            friday: {
              breakfast: "",
              interOne: "",
              lunch: "",
              interTwo: "",
              dinner: ""
            },
            saturday: {
              breakfast: "",
              interOne: "",
              lunch: "",
              interTwo: "",
              dinner: ""
            },
            sunday: {
              breakfast: "",
              interOne: "",
              lunch: "",
              interTwo: "",
              dinner: ""
            },
            routine: {
              monday: "",
              tuesday:"",
              wednesday:"",
              thuesday:"",
              friday:"",
              saturday:"",
              sunday:""
            }
          }),
        weekTwo: JSON.stringify({
          monday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: "",
          },
          tuesday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          wednesday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          thuesday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          friday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          saturday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          sunday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          routine: {
            monday: "",
            tuesday:"",
            wednesday:"",
            thuesday:"",
            friday:"",
            saturday:"",
            sunday:""
          }
        }),
        weekThree: JSON.stringify({
          monday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: "",
          },
          tuesday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          wednesday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          thuesday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          friday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          saturday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          sunday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          routine: {
            monday: "",
            tuesday:"",
            wednesday:"",
            thuesday:"",
            friday:"",
            saturday:"",
            sunday:""
          }
        }),
        weekFour:JSON.stringify({
          monday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: "",
          },
          tuesday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          wednesday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          thuesday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          friday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          saturday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          sunday: {
            breakfast: "",
            interOne: "",
            lunch: "",
            interTwo: "",
            dinner: ""
          },
          routine: {
            monday: "",
            tuesday:"",
            wednesday:"",
            thuesday:"",
            friday:"",
            saturday:"",
            sunday:""
          }
        }),
        date: JSON.stringify({
          startDate: "",
          endDate: ""
        }) ,
        user_id: 2,
      },
    ]);
  }
}

module.exports = DietSeeder;
