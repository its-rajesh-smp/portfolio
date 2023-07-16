const expressAsyncHandler=require('express-async-handler');

const nodemailer = require('nodemailer');
require("dotenv").config();

const USER=process.env.USER;
const PASS=process.env.PASS;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure:false,
    auth: {
        user: USER,
        pass: PASS,
    }
});

 function sendEmail(req, res){
    console.log(req.body);
    const { name, email, message } = req.body; 
    // console.log(name,email,message);
    const mailOptions = {
        from: email,
        to: USER,
        email:email,
        subject: `New message from Portfolio Website`,
        html:`<h3>Name:${name}</h3> <h3>Email: ${email}</h3>  <p>Sender's Message: ${message}</p>`,
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log(error);
          } else {
              console.log('Message sent: %s', info.messageId);
          }
      });
 };

module.exports={sendEmail};
