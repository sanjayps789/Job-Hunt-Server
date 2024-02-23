const mongoose = require('mongoose')
const emailSchema = new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
})

const emails = mongoose.model("emails",emailSchema)
module.exports = emails

