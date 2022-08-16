require('dotenv').config()
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'mwasjopa@gmail.com',
        pass: process.env.PASSWORD
    }
});

const sendEmail = (req, res)=>{
    try{

        const  { name, position, dateofBirth, phoneNumber, idno }= req.body;
        const files = req.files
        
        console.log(req.body)
        console.log(files)
        
        let mailOptions = {
            from        : process.env.USER,
            to          : process.env.EMAILTO,
            subject     : `${position}`,
            html        : ` 
                            <div>
                                <p>Name: ${name}</p>
                                <p>DOB: ${dateofBirth}</p>
                                <p>Phone Number: ${phoneNumber}</p>
                                <p>ID: ${idno}</p>
                            </div>
                            `,
            attachments : files
        }
        transporter.sendMail(mailOptions, (err, data ) => {
            if(err){
                res.json({
                    message: err
                }).status(400)
                console.log(err)
            }else{
                res.json({
                    status: "success"
                }).status(200)
    
                console.log("Email Sent" + data.response)
            }
        })

    }catch(error){
        res.status(400).send(error)
    }

    
}

module.exports = { sendEmail }