'use strict'

const Appoinmnet = use('App/Models/Appoinmnet');
const User = use('App/Models/User');

class AppoinmnetController {

    async index ({auth, response}){
        try {
            const jwt = await auth.getUser();
             let rows = await Appoinmnet.all();
             const array = rows.rows
             let users = []

             if (jwt.$attributes.role_id === 1) {
                for (const i of array) {
                    const user = await i.hasUser().fetch();
                    if (i) {
                        const data = i.$attributes;
                        users.push({
                            "id": data.id,
                            "user_id": data.user_id,
                            "consulting_room_id": data.consulting_room_id,
                            "motive": data.motive,
                            "date": data.date,
                            "schedule": data.schedule,
                            user
                        })
                    }
                }
                return response.status(200).json({ success: true,appoiments:users, message: `Lista de usuarios`, code: 200 });

             }else{
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
             }
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
                motive,
                date,
                schedule
            } = request.all();

            if (jwt.$attributes.role_id === 1) {
                appoiment.motive = motive
                appoiment.date = date
                appoiment.schedule = schedule
                await appoiment.save()
                return response.status(201).json({ success: true, result: appoiment, message: `Cita actualizada correctamente`, code: 201 });

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
                return response.status(200).json({ success: true, message: 'Cita eliminada correctamente', code: 200 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async appoinmnetId({params,auth, response}){
        try {
            const jwt = await auth.getUser();
            const i = await Appoinmnet.findOrFail(params.id)
         
            let users = []

            if (jwt.$attributes.role_id === 1) {
      
                   const user = await i.hasUser().fetch();
                   if (i) {
                       const data = i.$attributes;
                       users.push({
                           "id": data.id,
                           "user_id": data.user_id,
                           "consulting_room_id": data.consulting_room_id,
                           "motive": data.motive,
                           "date": data.date,
                           "schedule": data.schedule,
                           user
                       })
                   }
               
               return response.status(200).json({ success: true,appoiments:users, message: `Lista de usuarios`, code: 200 });

            }else{
               return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = AppoinmnetController
