const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    jobTitle:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    paymentScale:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    jobTime:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    },
    jobImage:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const jobs = mongoose.model("jobs",jobSchema)

module.exports = jobs