const cors        = require('cors')
require('dotenv').config()
const express     = require('express')
const emailRoutes = require('./routes/email-routes')
const bodyparser  = require('body-parser')


const app = express()
app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.json())


app.use(emailRoutes)



app.listen(process.env.PORT || 5000, ()=>{
    console.log('server is running')
})