'use strict'

const Diet = use('App/Models/Diet');

class DietController {

    async index ({auth, response}){
        try {
            const jwt = await auth.getUser();
             let rows = await Diet.all();
       
        
            (jwt.$attributes.role_id === 1)
                ? response.status(200).json({ success: true, users: rows, message: `Lista de dietas`, code: 200 })
                : response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
        } catch (error) {
            console.log(error);
            // return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
        }
    }
    async store ({request, auth, response}){
        try {
            const diet = await new Diet();
            const jwt = await auth.getUser();

            const {
                diseases,
                weight,
                size,
                age,
                allergy,
                plan,
                user_id,
                status_user_id,
                role_id,
                appoiments_id
            } = request.all();

            if (jwt.$attributes.role_id === 1) {
                diet.diseases = diseases,
                diet.weight = weight,
                diet.size = size,
                diet.age = age,
                diet.allergy = allergy,
                diet.plan = plan,
                diet.user_id = user_id,
                diet.status_user_id = status_user_id,
                diet.role_id = role_id,
                diet.appoiments_id = appoiments_id

                await diet.save()
                return response.status(201).json({ success: true, result: diet, message: `Dieta creada correctamente`, code: 201 });

            }
        } catch (error) {
         console.log(error);   
        }
    }

    async update ({request, params, auth, response}){
        try {
            const diet = await Diet.findOrFail(params.id)
            const jwt = await auth.getUser();

            const {
                diseases,
                weight,
                size,
                age,
                allergy,
                plan,
                user_id,
                status_user_id,
                role_id,
                appoiments_id
            } = request.all();

            if (jwt.$attributes.role_id === 1) {
                diet.diseases = diseases,
                diet.weight = weight,
                diet.size = size,
                diet.age = age,
                diet.allergy = allergy,
                diet.plan = plan,
                diet.user_id = user_id,
                diet.status_user_id = status_user_id,
                diet.role_id = role_id,
                diet.appoiments_id = appoiments_id

                await diet.save()
                return response.status(201).json({ success: true, result: diet, message: `Dieta creada correctamente`, code: 201 });

            }
        } catch (error) {
         console.log(error);   
        }
    }

    async delete ({ params, auth, response}){
        try {
            const jwt = await auth.getUser()
            if (jwt.$attributes.role_id === 1) {
                const diet = await Diet.findOrFail(params.id)
                await diet.delete();
                return response.status(200).json({ success: true, message: 'Dieta eliminada correctamente', code: 200 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = DietController
