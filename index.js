// loads .env file contents into process.env
require('dotenv').config()
const express = require('express')
// cors helps to share data from different ports
const cors = require('cors')
const router = require('./Routes/router')
// connect db with entry file
require('./DB/connection')
// express server
const jobServer = express()

// use cors in server
jobServer.use(cors())

// use json parser to convert json  to js object 
jobServer.use(express.json())

// use router
jobServer.use(router)

// available uploads folder from server to other app
jobServer.use('/uploads',express.static('./uploads'))


const PORT = 5000
//to host jobserver : localhost:5000
jobServer.listen(PORT,()=>{
    console.log(`Job Server Started at port: ${PORT}`);
})

// to resolve get http request to  http://localhost:5000/
jobServer.get('/',(req,res)=>{
    res.send("<h1 style=color:red>Job Server Started... and waiting for client request</h1>")

})

