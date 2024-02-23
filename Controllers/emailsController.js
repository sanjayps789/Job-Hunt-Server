const nodemailer = require('nodemailer')
const emails = require('../Models/emailModel')
exports.sendEmail = async(req,res) =>{
    console.log("Inside Send Email API");
    try{
        const {to,subject,text} = req.body
        const mailOptions = {
            from:{
                name:"Sanjay PS",
                address:process.env.USER
            },
            to,
            subject,
            text
        };

        // send email

        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user:process.env.USER,
                pass:process.env.APP_PASSWORD
                
            }
        })
         transporter.sendMail(mailOptions);
        await emails.create({to,subject,text})
        res.status(200).json({message:'Email sent succesfully'})
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}