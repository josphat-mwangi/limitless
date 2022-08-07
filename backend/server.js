const cors        = require('cors')
const dotenv      = require('dotenv')
const express     = require('express')
const nodemailer  = require('nodemailer');


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const port = process.env.PORT || 5000;

let transporter =  nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});

app.post('/mail', (req, res, next)=>{
    const { name, phoneNumber, DateofBirth, idno, position} = req.body

    let mailOptions = {
        from        : "josphatwanjiruw@gmail.com",
        to          : "mwasjopa@gmail.com",
        subject     : `${position}`,
        text        : "",
        html        : ` 
                        <div>
                            <h2>Name:${name}</h2>
                            <h2>DOB:${DateofBirth}</h2>
                            <h2>Phone Number:${phoneNumber}</h2>
                            <h2>ID:${idno}</h2>
                        </div>
                        `,
        attachments : [
            {
                filename : req.file.name,
                path     : req.file.path,
            }
        ]
    }

    transporter.sendMail(mailOptions, (err, data)=>{
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

});

transporter.verify((error, success)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Server is ready to take our messages!")
    }
});





app.listen(port, ()=>{
    console.log('server is running')
})