const nodemailer = use('nodemailer');

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: `${process.env.USER_EMAIL}`,
      pass: `${process.env.PASS_EMAIL}`,
    },
    // tls: {
    //   rejectUnauthorized: false,
    // }
  });

