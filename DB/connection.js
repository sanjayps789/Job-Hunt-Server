const mongoose = require('mongoose')

const connecionString = process.env.CONNECTION_STRING

mongoose.connect(connecionString).then(()=>{
    console.log("MongoDb Atlas Connected Successfully with JobServer");
}).catch((reason)=>{
    console.log(reason);
    console.log("MongoDb Connection Failed");
})

