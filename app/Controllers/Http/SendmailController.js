'use strict'
const nodemailer = use('nodemailer');
class SendmailController {

    async store({auth, response, request}){
        try {
           

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: `${process.env.USER_EMAIL}`,
      pass: `${process.env.PASS_EMAIL}`,
    }
  });
             await transporter.sendMail({
                        from:'"Producto apartado" <2117300627@soy.utj.edu.mx>',
                        to: "jetrodanielonofre@gmail.com",
                        subject:"El cliente nombre ha apartado productos",
                        html:`<b>Probando el apartado de productos</b>`
                    })
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = SendmailController
