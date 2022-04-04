'use strict'

const PreListDiet = use('App/Models/PreListDiet');

class PreListDietController {
    async index ({auth, response}){
        try {
            const jwt = await auth.getUser();
            let rows = await PreListDiet.all();
            const array = rows.rows
            let diets = []

            for (const data of array) {
                diets.push({
                    "id":data?.id,
                    "name":data?.name,
                    "weekOne": JSON.parse(data?.weekOne),
                    "weekTwo": JSON.parse(data?.weekTwo),
                    "weekThree": JSON.parse(data?.weekThree) ,
                    "weekFour": JSON.parse(data?.weekFour),
                })
            }


            (jwt.$attributes.role_id === 1)
                ? response.status(200).json({ success: true, template: diets, message: `Lista de dietas para plantilla`, code: 200 })
                : response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
        }
    }
}

module.exports = PreListDietController
