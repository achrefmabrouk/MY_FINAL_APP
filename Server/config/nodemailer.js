const nodemailer=require('nodemailer')
require ('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:process.env.EMAIL ,
      pass: process.env.PASSWORD
    }
  });
  
  module.exports.sendpassword=(email,password)=>{
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Votre nouveau mot de passe',
      text: `Voici votre nouveau mot de passe: ${password}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    })
  }
  