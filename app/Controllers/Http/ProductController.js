'use strict'

const Product = use('App/Models/Product');

class ProductController {

    async index({auth, response}){
        try {
            const jwt = await auth.getUser();
            let rows = await Product.all();

            (jwt.$attributes.role_id === 1 || jwt.$attributes.role_id === 2 && jwt.$attributes.status_user_id === 1)
            ? response.status(200).json({products: rows})
            : response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });

        } catch (error) {
            console.log(error);
            // return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
        }
    }
    async store({auth, response, request}){
        try {
            const products = await new Product();
            const jwt = await auth.getUser();

            const {
                name,
                price,
                serialNumber,
                quantity

            } = request.all();
            if (jwt.$attributes.role_id === 1) {

                products.name = name
                products.price = price
                products.serialNumber = serialNumber
                products.quantity = quantity

                await products.save()
                return response.status(201).json({ success: true, result: products, message: `Producto creado correctamente`, code: 201 });
            }
        } catch (error) {
         console.log(error);   
        }
    }
    async update({auth, response, request,params}){
        try {
            const jwt = await auth.getUser();

            const {
                name,
                price,
                serialNumber,
                quantity

            } = request.all();
            const products = await Product.findOrFail(params.id)
            if (jwt.$attributes.role_id === 1) {

                products.name = name
                products.price = price
                products.serialNumber = serialNumber
                products.quantity = quantity

                await products.save()
                return response.status(201).json({ success: true, result: products, message: `Producto actualizado correctamente`, code: 201 });
            }else{
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }

        } catch (error) {
            console.log(error);
        }
    }
    async updateToggle({auth, response, request,params}){
        try {
            const jwt = await auth.getUser();

            const {
            estado

            } = request.all();
            const products = await Product.findOrFail(params.id)
            if (jwt.$attributes.role_id === 1) {

                products.estado = estado

                await products.save()
                return response.status(201).json({ success: true, result: products, message: `Estado actualizado correctamente`, code: 201 });
            }else{
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }

        } catch (error) {
            console.log(error);
        }
    }
    async delete({auth, response,params}){
        try {
            const jwt = await auth.getUser()
            if (jwt.$attributes.role_id === 1) {
                const products = await Product.findOrFail(params.id)
                await products.delete();
                return response.status(200).json({ success: true, message: 'Producto eliminado correctamente', code: 200 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            console.log(error);
        }
    }
    async productId({params,auth, response}){
        const product = await Product.findOrFail(params.id)
        const jwt = await auth.getUser();
        
        (jwt.$attributes.role_id === 1)
        ? response.status(200).json({ success: true, products: product, message: `Lista de productos`, code: 200 })
        : response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
        

    }
    async productsOfAuth({response}){
        try {
            let rows = await Product.all();

             response.status(200).json({products: rows})

        } catch (error) {
            console.log(error);
            // return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
        }
    }

}

module.exports = ProductController
