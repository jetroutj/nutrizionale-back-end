'use strict'

const Appoinmnet = use('App/Models/Appoinmnet');
const User = use('App/Models/User');

class AppoinmnetController {

    async index ({auth, response}){
        try {
            const jwt = await auth.getUser();
             let rows = await Appoinmnet.all();
       
        
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
            const appoiment = await new Appoinmnet();
            const jwt = await auth.getUser();

            const {
                user_id,
                motive,
                date,
                schedule
            } = request.all();

            if (jwt.$attributes.role_id === 1) {
                appoiment.user_id = user_id
                appoiment.motive = motive
                appoiment.date = date
                appoiment.schedule = schedule

                await appoiment.save()
                
                const updateId = await User.findOrFail(user_id)
                updateId.appoiment_id = user_id
                await updateId.save()
                return response.status(201).json({ success: true, result: appoiment, message: `Cita creada correctamente`, code: 201 });

            }
        } catch (error) {
         console.log(error);   
        }
    }

    async update ({request, params, auth, response}){
        try {
            const appoiment = await Appoinmnet.findOrFail(params.id)
            const jwt = await auth.getUser();

            const {
  
            } = request.all();

            if (jwt.$attributes.role_id === 1) {
  

                await appoiment.save()
                return response.status(201).json({ success: true, result: appoiment, message: `Dieta creada correctamente`, code: 201 });

            }
        } catch (error) {
         console.log(error);   
        }
    }

    async delete ({ params, auth, response}){
        try {
            const jwt = await auth.getUser()
            if (jwt.$attributes.role_id === 1) {
                const appoiment = await Appoinmnet.findOrFail(params.id)
                await appoiment.delete();
                return response.status(200).json({ success: true, message: 'Dieta eliminada correctamente', code: 200 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = AppoinmnetController
