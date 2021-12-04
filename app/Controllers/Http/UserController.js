'use strict'

const User = use('App/Models/User');
const Role = use('App/Models/Role');


class UserController {
    async index({ auth, response }) {
        try {
            const jwt = await auth.getUser();
            const rows = await User.all();
            const array = rows.rows
            let appoimentUser = []


              if (jwt.$attributes.role_id === 1) {
                for (const i of array) {
                    // const appoiment = await i.hasAppoiment().fetch();
                    if (i.$attributes.role_id === 2 && i.$attributes.estado === 'activo') {
                        const clients = i.$attributes;
                        console.log(clients);
                        appoimentUser.push({
                            "id":clients.id,
                            "username": clients.username,
                            "name": clients.name,
                            "lastname": clients.lastname,
                            "phone": clients.phone,
                            "email": clients.email,
                            "address": clients.address,
                            "nss": clients.nss,
                            "rfc": clients.rfc,
                            "estado":clients.estado,
                            "appoiment_id":clients.appoiment_id,
                            //  appoiment
                        })

                    }
                }
                return response.status(200).json({ success: true, users: appoimentUser, message: `Lista de usuarios`, code: 200 });

            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
            // (jwt.$attributes.role_id === 1)
            //     ? response.status(200).json({ success: true, users: appoimentUser, message: `Lista de usuarios`, code: 200 })
            //     : response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
        } catch (error) {
            console.log(error);
            // return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
        }
    }
    async store({ auth, response, request }) {
        try {
            const user = await new User();
            const jwt = await auth.getUser();

            const {
                name,
                lastname,
                username,
                email,
                phone,
                address,
                password,
                rfc,
                status_user_id = 1,
                role_id = 2,
                estado = 'activo'

            } = request.all();

            if (jwt.$attributes.role_id === 1) {

                user.name = name,
                    user.lastname = lastname,
                    user.username = username,
                    user.email = email,
                    user.phone = phone,
                    user.address = address,
                    user.password = password,
                    user.rfc = rfc
                    user.status_user_id = status_user_id,
                    user.role_id = role_id,
                    user.estado = estado

                await user.save();
                return response.status(201).json({ success: true, result: user, message: `Usuario creado correctamente`, code: 201 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
            // console.log(error);
        }
    }
    async update({ request, params, auth, response }) {
        try {
            const jwt = await auth.getUser()
            let { name,
                lastname,
                username,
                email,
                phone,
                address,
                password,
                rfc,
                status_user_id = 1,
                role_id = 2 } = request.all();
            const user = await User.findOrFail(params.id)
            if (jwt.$attributes.role_id === 1) {
                    user.name = name,
                    user.lastname = lastname,
                    user.username = username,
                    user.email = email,
                    user.phone = phone,
                    user.address = address,
                    user.password = password,
                    user.rfc = rfc
                    user.status_user_id = status_user_id,
                    user.role_id = role_id
                await user.save()
                return response.status(200).json({ success: true, result: user, message: `Usuario actualizado correctamente`, code: 200 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
        }
    }
    async usersDelete({ params, auth,response }) {
        try {
            const jwt = await auth.getUser()
            if (jwt.$attributes.role_id === 1) {
                const user = await User.findOrFail(params.id)
                await user.delete();
                return response.status(200).json({ success: true, message: 'Usuario eliminado correctamente', code: 200 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            console.log(error);
        }
    }
    async login({ request, auth, response }) {

        const { email, password } = request.all();

        const token = await auth.attempt(email, password);
        return response.status(200).json({ success: true, result: token, message: `Has iniciado sesion correctamente`, code: 200 });


    }
    async createUser({ response, request }) {
        try {
            const user = await new User();
            let status = 1;

            const {
                name,
                lastname,
                username,
                email,
                phone,
                address,
                password,
                rfc,
                status_user_id = 1,
                role_id = 1

            } = request.all();

            if (status === 1) {

                user.name = name,
                    user.lastname = lastname,
                    user.username = username,
                    user.email = email,
                    user.phone = phone,
                    user.address = address,
                    user.password = password,
                    user.rfc = rfc
                user.status_user_id = status_user_id,
                    user.role_id = role_id

                await user.save();
                return response.status(201).json({ success: true, result: user, message: `Usuario creado correctamente`, code: 201 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
            // console.log(error);
        }
    }
    async searchName({ params, auth, response }) {
        try {
            const jwt = await auth.getUser()
            const rows = await User.all();
            const array = rows.rows
            let items = {
                "user": []
            };

            if (jwt.$attributes.role_id === 1) {
                for (const i of array) {

                    if (i.$attributes.name.match(params.name)) {
                        const clients = i.$attributes;
                        // console.log(clients);
                        items.user.push({
                            "id":clients.id,
                            "username": clients.username,
                            "name": clients.name,
                            "lastname": clients.lastname,
                            "phone": clients.phone,
                            "email": clients.email,
                            "address": clients.address,
                            "nss": clients.nss,
                            "rfc": clients.rfc
                        })

                    }
                }

                return response.status(200).json({ success: true, result: items, message: `Usuario encontrado`, code: 200 });

            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }

        } catch (error) {
            console.log(error);
        }
    }
    async searchPhone({ params, auth, response }) {
        try {
            const jwt = await auth.getUser()
            const rows = await User.all();
            const array = rows.rows
            let items = {
                "user": []
            };

            if (jwt.$attributes.role_id === 1) {
                for (const i of array) {

                    if (i.$attributes.phone.match(params.phone)) {
                        const clients = i.$attributes;
                        console.log(clients);
                        items.user.push({
                            "username": clients.username,
                            "name": clients.name,
                            "lastname": clients.lastname,
                            "phone": clients.phone,
                            "email": clients.email,
                            "address": clients.address,
                            "nss": clients.nss,
                            "rfc": clients.rfc
                        })

                    }
                }
                return response.status(200).json({ success: true, result: items, message: `Usuario encontrado`, code: 200 });

            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }

        } catch (error) {
            console.log(error);
        }
    }
    async userAppoiment({params,auth, response}){
        try {
            const jwt = await auth.getUser()
            const rows = await User.all();
            const array = rows.rows
            let items = []

            if (jwt.$attributes.role_id === 1) {
                for (const i of array) {
                    const appoiment = await i.hasAppoiment().fetch();
                    if (i.$attributes.name.match(params.name)) {
                        const clients = i.$attributes;
                        console.log(clients);
                        items.push({
                            "id":clients.id,
                            "username": clients.username,
                            "name": clients.name,
                            "lastname": clients.lastname,
                            "phone": clients.phone,
                            "email": clients.email,
                            "address": clients.address,
                            "nss": clients.nss,
                            "rfc": clients.rfc,
                            "appoiment_id":clients.appoiment_id,
                            appoiment
                        })

                    }
                }
                return response.status(200).json({ success: true, users: items, message: `Usuario encontrado`, code: 200 });

            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }

        } catch (error) {
            console.log(error);
        }
    }
    async userDiet({params,auth, response}){
        try {
            const jwt = await auth.getUser()
            const rows = await User.all();
            const array = rows.rows
            let items = []

            if (jwt.$attributes.role_id === 1) {
                for (const i of array) {
                    const diet = await i.hasDiet().fetch();
                    if (i.$attributes.name.match(params.name)) {
                        const clients = i.$attributes;
                        console.log(clients);
                        items.push({
                            "id":clients.id,
                            "username": clients.username,
                            "name": clients.name,
                            "lastname": clients.lastname,
                            "phone": clients.phone,
                            "email": clients.email,
                            "address": clients.address,
                            "nss": clients.nss,
                            "rfc": clients.rfc,
                            "appoiment_id":clients.appoiment_id,
                            diet
                        })

                    }
                }
                return response.status(200).json({ success: true, users: items, message: `Usuario encontrado`, code: 200 });

            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }

        } catch (error) {
            console.log(error);
        }
    }
    async searchId({params,auth, response}){
        const user = await User.findOrFail(params.id)
        const jwt = await auth.getUser();
        
        (jwt.$attributes.role_id === 1)
        ? response.status(200).json({ success: true, users: user, message: `Lista de usuarios`, code: 200 })
        : response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
        

    }
    async updateStateUser({ request, params, auth, response }) {
        try {
            const jwt = await auth.getUser()
            let { estado } = request.all();
            const user = await User.findOrFail(params.id)
            if (jwt.$attributes.role_id === 1) {
                user.estado = estado
                await user.save();
                return response.status(200).json({ success: true, result: user, message: `Usuario actualizado correctamente`, code: 200 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
        }
    }
    async listForUser({auth, response}){
        try {
            const jwt = await auth.getUser();
            const clients = await User.findOrFail(jwt.$attributes.id)
            
            // console.log(array);
            let user = []
            let appoimentArray = [];
            if (jwt.$attributes.role_id === 2) {
                
                    const appoiment = await clients.hasAppoiment().fetch() || null;
                    let appoimentHasMany = appoiment.rows;
                    for (const res of appoimentHasMany) {
                        if (res.$attributes.estado === 'disponible') {
                            const data = res.$attributes;

                            // appoimentArray.push({
                            //     "id": data.id,
                            //     "user_id": data.user_id,
                            //     "consulting_room_id": data.consulting_room_id,
                            //     "motive": data.motive,
                            //     "date": data.date,
                            //     "schedule": data.schedule,
                            //     "estado":data.estado,
                            // })

                        

                    
                    const diet = await clients.hasDiet().fetch();
                    if (clients.$attributes.role_id === 2) {
                        const response = clients.$originalAttributes;
                        user.push({
                            "id":response.id,
                            "username": response.username,
                            "name": response.name,
                            "lastname": response.lastname,
                            "phone": response.phone,
                            "email": response.email,
                            "address": response.address,
                            "nss": response.nss,
                            "rfc": response.rfc,
                            "appoiment_id":response.appoiment_id,
                            "appoimentArray":{
                                "id": data.id,
                                "user_id": data.user_id,
                                "consulting_room_id": data.consulting_room_id,
                                "motive": data.motive,
                                "date": data.date,
                                "schedule": data.schedule,
                                "estado":data.estado,
                            },
                            "diet":{        
                             "id": diet.id,
                             "user_id": diet.user_id,
                            "disease": diet.disease,
                            "weight":diet.weight,
                            "size": diet.size,
                            "age": diet.age,
                            "allergy": diet.allergy,
                            "calories": diet.calories,
                            "typeDiet": diet.typeDiet,
                            "imc": diet.imc,
                            "stateWeight":diet.stateWeight,
                            "gender": diet.gender,
                            "date": JSON.parse(diet.date),
                            "weekOne":JSON.parse(diet.weekOne),
                            "weekTwo":JSON.parse(diet.weekTwo),
                            "weekThree":JSON.parse(diet.weekThree),
                            "weekFour":JSON.parse(diet.weekFour)
                        }

                        })
    
                    }
                }
                }
                
                return response.status(200).json({users: user});
    
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            console.log(error);
        }

    }

    async listActiveSupend({ auth, response }) {
        try {
            const jwt = await auth.getUser();
            const rows = await User.all();
            const array = rows.rows
            let appoimentUser = []


              if (jwt.$attributes.role_id === 1) {
                for (const i of array) {
                    // const appoiment = await i.hasAppoiment().fetch();
                    if (i.$attributes.role_id === 2 && i.$attributes.estado === 'suspendido') {
                        const clients = i.$attributes;
                        console.log(clients);
                        appoimentUser.push({
                            "id":clients.id,
                            "username": clients.username,
                            "name": clients.name,
                            "lastname": clients.lastname,
                            "phone": clients.phone,
                            "email": clients.email,
                            "address": clients.address,
                            "nss": clients.nss,
                            "rfc": clients.rfc,
                            "estado":clients.estado,
                            "appoiment_id":clients.appoiment_id,
                            //  appoiment
                        })

                    }
                }
                return response.status(200).json({ success: true, users: appoimentUser, message: `Lista de usuarios`, code: 200 });

            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
            // (jwt.$attributes.role_id === 1)
            //     ? response.status(200).json({ success: true, users: appoimentUser, message: `Lista de usuarios`, code: 200 })
            //     : response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
        } catch (error) {
            console.log(error);
            // return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
        }
    }
}

module.exports = UserController
