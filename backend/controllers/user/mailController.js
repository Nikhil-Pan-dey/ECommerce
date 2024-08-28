const nodemailer = require("nodemailer");

const mailController = async(req,res)=>{
    let account = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'evelyn.jaskolski78@ethereal.email',
            pass: 'Nft7D9H4AB7m3Wek7s'
        }
    });

    const info = await transporter.sendMail({
        from: '"Shop Here" <nikhil.pandey.515.20@gmail.email>', // sender address
        to: "nikhilpandey515@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log("Message sent: %s", info.messageId);

}

module.exports = mailController