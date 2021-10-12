'use strict'

const User = use('App/Models/User');
const Hash = use('Hash')

class UserController {
    async index({ auth, response }) {
        try {
            const jwt = await auth.getUser();
            const rows = await User.all();

            (jwt.$attributes.role_id === 1)
                ? response.status(200).json({ success: true, users: rows, message: `Lista de usuarios`, code: 200 })
                : response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
        } catch (error) {
            return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
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
                role_id = 2

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
}

module.exports = UserController