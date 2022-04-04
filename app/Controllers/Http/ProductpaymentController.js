'use strict'
const Productpay = use('App/Models/Productpayment');
const Product = use('App/Models/Product');
const nodemailer = use('nodemailer');


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: `${process.env.USER_EMAIL}`,
      pass: `${process.env.PASS_EMAIL}`,
    }
  });

class ProductpaymentController {

    async index({auth,response}){
        try {
            const jwt = await auth.getUser();
            const rows = await Productpay.all();
            const array = rows.rows
            const listMyAparment = []
            if (jwt.$attributes.role_id === 2) {
                const misApart = array.filter(res => res.userId === jwt.$attributes.id && res.estado === 'apartado')
                if(!misApart){
                    response.status(201).json({ success: false, message: `Lo sentimos aun no tienes productos apartados`, code: 201 })
                }else{   
                    for (const i of misApart) {
                    const prt = await i.hasProduct().fetch()
                    const productRelation = prt.rows
                    for (const e of productRelation) {
                        listMyAparment.push({
                            "id": i.id,
                            "userId": i.userId,
                            "productId": i.productId,
                            "cantidad": i.cantidad,
                            "estado": i.estado,
                            "product": {
                                "id": e.id,
                                "consulting_room_id": e.consulting_room_id,
                                "name": e.name,
                                "price": e.price,
                                "serialNumber": e.serialNumber,
                                "quantity": e.quantity,
                                "estado": e.estado,
                                "imagen": e.imagen
                            } 
                        })
                    }
      
                }
          
                return response.status(200).json({ success: true,listMyAparment, message: `Solicitud correcta`, code: 200 })}

            } else {
                const rows = await Productpay.all();
                const array = rows.rows
                const listProduct = []
                
                for (const i of array) {
                    const prt = await i.hasProduct().fetch()
                    const userhs = await i.hasUser().fetch()
                    const productRelation = prt.rows
                    const userRelations = userhs.rows
                    for (const e of productRelation) {
                        for (const usr of userRelations) {
                            listProduct.push({
                                "id": i.id,
                                "userId": i.userId,
                                "productId": i.productId,
                                "cantidad": i.cantidad,
                                "estado": i.estado,
                                "product": {
                                    "id": e.id,
                                    "consulting_room_id": e.consulting_room_id,
                                    "name": e.name,
                                    "price": e.price,
                                    "serialNumber": e.serialNumber,
                                    "quantity": e.quantity,
                                    "estado": e.estado,
                                    "imagen": e.imagen
                                },
                                usr
                            })
                        }
                   
                    }

                }
              

                return response.status(200).json({ success: true,listProduct, message: `Solicitud correcta`, code: 200 })

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
                    await productpay.save()
                
                    await transporter.sendMail({
                            from:'"Producto apartado" <2117300627@soy.utj.edu.mx>',
                            to: [
                                "jetrodanielonofre@gmail.com",
                                "2118300353@soy.utj.edu.mx"
                                ],
                            // subject: `Producto apartado`,
                            html:`    <head>
                            <meta charset="utf-8" />
                            <style>
                                td{
                                    padding: 5px 10px;
                                    text-align: center;
                                    border: 1px solid #999;
                                }
                                footer{
                                    font-size: large;
                                }
                            </style>
                            
                        </head>
                        <body>
                        <section>
                            <table width="620" border="0" cellspacing="0" cellpadding="0" align="center" style="background: url() center center / cover no-repeat, #efe9e5;" >
                                <tr style="background-color: #00a78e;">
                                    <td>
                                        <br>
                                        <br>
                                      
                                    </td>
                                </tr>
                                <tr>
                                    <td>        
                                        <div>
                                            <h1 style="font-size: xx-large;">Nutriozionale.SPA</h1>
                                            <p class="" style="font-size: xx-large;">${jwt.$attributes.name} ${jwt.$attributes.lastname} ha apartado un producto</p>
                                        </div>
                                        <div>
                                            <table border="1" style="width:auto; height:20px;">
                                                <tr>
                                                  
                                                        <td><p style="font-size:medium;">Nombre del producto</p></td>
                                                        <td><p style="font-size:medium;">Precio unitario</p></td>
                                                        <td><p style="font-size:medium;">Precio total</p></td>
                                                        <td><p style="font-size:medium;">Cliente</p> </td>
                                                </tr>
                                                <tr>
                                                   
                                                    <td><p style="font-size: medium;">${i.name}</p></td>
                                                    <td><p style="font-size: medium;">$${i.price}</p></td>
                                                    <td><p style="font-size: medium;">$${i.price * cantidad}</p></td>
                                                    <td><p style="font-size: medium;">${jwt.$attributes.name}</p></td>
                                                </tr>
                                            </table>
                                        <footer>
                                         
                                        </footer>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </section>
                        </body>`
                        })
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
                estado

            } = request.all();
        
           const id = params.id
            if (jwt.$attributes.role_id === 1 || jwt.$attributes.role_id === 2) {
                switch (estado) {
                    case 'pagado':
                        try {
                            
                        let productsPay = await Productpay.findOrFail(parseInt(id))
                        productsPay.estado = 'pagado'
                        await productsPay.save()
                        let products = await Product.findOrFail(parseInt(productsPay.productId))
                        let productQ = products.quantity 
                        let countProduct = productsPay.cantidad
                         let quantityUpdate = productQ - countProduct
                            console.log(quantityUpdate);
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
