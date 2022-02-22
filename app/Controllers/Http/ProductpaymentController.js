'use strict'
const Productpay = use('App/Models/Productpayment');
const Product = use('App/Models/Product');

class ProductpaymentController {

    async index({auth,response}){
        try {
            const jwt = await auth.getUser();
            const rows = await Productpay.all();
            const array = rows.rows
            console.log(jwt.$attributes.id );
            if (jwt.$attributes.id > 1) {
                const misApart = array.filter(res => res.userId === jwt.$attributes.id )
                for (const i of misApart) {
                    const prt = i.hasProduct().fetch()
                    console.log(prt);
                }
          
                return response.status(201).json({ success: true,misApart, message: `Producto creado correctamente`, code: 201 });

            } else {
                return response.status(201).json({ success: true,array, message: `Producto creado correctamente`, code: 201 });
            }
           

        } catch (error) {
            console.log(error);
        }
    }
    async store({auth, response, request}){
        try {
            const productpay = await new Productpay();
            const jwt = await auth.getUser();
            const rows = await Product.all();
            const array = rows.rows
            const {
                productId,
                estado,
                cantidad

            } = request.all();
            const sumatory = await array.filter(res => res.id === productId)
            const userID = jwt.$attributes.id
            for (const i of sumatory) {

                if (cantidad > i.quantity ) {
                    response.status(400).json({succes:false,message:'no hay suficientes productos'})
                }else{
                    productpay.userID = userID
                    productpay.productId = productId
                    productpay.estado = estado
                    productpay.cantidad = cantidad
                    // productpay.fechaApartado = Date.now
                    // productpay.fechaConclusion = null
        
                    await productpay.save()
        
                    response.status(201).json({ success: true, result: productpay, message: `Producto apartado correctamente`, code: 201 });
        
                }
            }


        } catch (error) {
         console.log(error);   
        }
    }
    async update({auth, response, request,params}){
        try {

            const jwt = await auth.getUser();
            const {
                estado,
                cantidad

            } = request.all();
        
           const id = params.id
            if (jwt.$attributes.role_id === 1) {
                switch (estado) {
                    case 'pagado':
                        try {
                            
                        let productsPay = await Productpay.findOrFail(parseInt(id))
                        productsPay.estado = 'pagado'

                        await productsPay.save()
                        let products = await Product.findOrFail(parseInt(productsPay.productId))
                        let productQ = products.quantity 
                        let paymentQ = cantidad
                        let quantityUpdate = productQ - paymentQ
                        products.quantity = quantityUpdate
                        await products.save()
                         response.status(201).json({ success: true,message: `Producto actualizado correctamente`, code: 201 });
                        } catch (error) {
                            response.status(401).json({ success: true,message: `Este apartado no existe`, code: 401 });
                        }
                
          
                        break;
                    case 'cancelado':
                        try {
                                      
                         let productCancel= await Productpay.findOrFail(parseInt(id))
                         productCancel.estado = 'cancelado'

                        await productCancel.save()

                         response.status(201).json({ success: true,message: `Producto actualizado correctamente`, code: 201 });
                        } catch (error) {
                            response.status(401).json({ success: true,message: `Este apartado no existe`, code: 401 });

                        }
     
                        break;
                
                    default:
                        break;
                }
  
                }
            

            
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ProductpaymentController
