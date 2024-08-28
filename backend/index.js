const express = require('express');
const cors = require('cors')
const cookieParser = require("cookie-parser")
require('dotenv').config()
const connectDB = require('./config/db')
const router = require("./routes")
const app = express()


app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}
))
app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser())
//POSITIONS OF app.use AND require  STATEMENTS ALSO MATTERS
app.use("/api/v1" , router)

const PORT = 8080 || process.env.PORT
connectDB().then(()=>{
    app.listen(PORT , ()=>{
        console.log(`Server is running at ${PORT}`)
    })   
})       
   