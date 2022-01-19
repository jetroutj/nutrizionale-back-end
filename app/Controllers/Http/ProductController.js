'use strict'

const Product = use('App/Models/Product');
const AWS = use('aws-sdk'); 

AWS.config.update({ accessKeyId: process.env.AWS_ACCESS_ID, secretAccessKey: process.env.AWS_SECRET_KEY, region: process.env.AWS_REGION});

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
                quantity,
                imagen

            } = request.all();
            const bucketName = process.env.BUCKET_AWS; 
            const s3 = new AWS.S3();
            
            const buf = new Buffer.from(imagen.replace(/^data:image\/\w+;base64,/, ""),'base64')
            const type = imagen.split(';')[0].split('/')[1];

                const bucketParams = {
              Bucket: `${bucketName}`, // The name of the bucket. For example, 'sample_bucket_101'.
              Key: `products/product-${serialNumber}.${type}`, // The name of the object. For example, 'sample_upload.txt'.
              Body: buf,
              ContentEncoding: 'base64',
              ContentType: `image/${type}`,
              ACL: 'public-read', // required. Notice the back ticks// required // The content of the object. For example, 'Hello world!".
                }

            if (jwt.$attributes.role_id === 1) {
             const res = await new Promise((resolve,reject) => {
                    s3.upload(bucketParams, (err,data) =>{
                        err == null ? resolve(data) : reject(err)
                    });
                    
                });
                products.imagen = res.Location
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
                quantity,
                imagen

            } = request.all();
            const bucketName = process.env.BUCKET_AWS; 
            const s3 = new AWS.S3();
            
            const buf = new Buffer.from(imagen.replace(/^data:image\/\w+;base64,/, ""),'base64')
            const type = imagen.split(';')[0].split('/')[1];

                const bucketParams = {
              Bucket: `${bucketName}`, // The name of the bucket. For example, 'sample_bucket_101'.
              Key: `products/product-${serialNumber}.${type}`, // The name of the object. For example, 'sample_upload.txt'.
              Body: buf,
              ContentEncoding: 'base64',
              ContentType: `image/${type}`,
              ACL: 'public-read', // required. Notice the back ticks// required // The content of the object. For example, 'Hello world!".
                }


            const products = await Product.findOrFail(params.id)
            if (jwt.$attributes.role_id === 1) {
                const res = await new Promise((resolve,reject) => {
                    s3.upload(bucketParams, (err,data) =>{
                        err == null ? resolve(data) : reject(err)
                    });
                    
                });
                products.imagen = res.Location
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
    async uploadImage({ request, params, auth, response }) {
        try {
            let jwt = await auth.getUser();
            const { imagen } = request.all();

            const bucketName = process.env.BUCKET_AWS; 
            const s3 = new AWS.S3();
            
            const buf = new Buffer.from(imagen.replace(/^data:image\/\w+;base64,/, ""),'base64')
            const type = imagen.split(';')[0].split('/')[1];

                const bucketParams = {
              Bucket: `${bucketName}`, // The name of the bucket. For example, 'sample_bucket_101'.
              Key: `products/product-${params.id}.${type}`, // The name of the object. For example, 'sample_upload.txt'.
              Body: buf,
              ContentEncoding: 'base64',
              ContentType: `image/${type}`,
              ACL: 'public-read', // required. Notice the back ticks// required // The content of the object. For example, 'Hello world!".
                }
            let product = await Product.findOrFail(params.id)
            if (jwt.$attributes.role_id === 1 ) {
                const res = await new Promise((resolve,reject) => {
                    s3.upload(bucketParams, (err,data) =>{
                        err == null ? resolve(data) : reject(err)
                    });
                    
                });
                product.imagen = res.Location
                
                await product.save();
                return response.status(200).json({ success: true,data:res, message: `Imagen actualizada correctamente`, code: 200 });
            } else {
                return response.status(401).json({ success: false, message: `No tienes los permisos para realizar esta accion`, code: 401 });
            }
        } catch (error) {
            console.log(error);
            return response.status(500).json({ success: false, result: error, message: `Algo ocurrio`, code: 500 });
        }
    }

}

module.exports = ProductController
