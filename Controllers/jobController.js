const jobs = require('../Models/jobModel')

// add-job API
exports.addJob = async(req,res) => {
    console.log("inside add job API");
    const userId = req.payload
    const {jobTitle,companyName,paymentScale,location,experience,jobTime,skills,jobDescription} = req.body
    const jobImage = req.file.filename
    console.log(jobTitle,companyName,paymentScale,location,experience,jobTime,skills,jobDescription,jobImage,userId);
   try{ 
    const newJob = new jobs({
        jobTitle,companyName,paymentScale,location,experience,jobTime,skills,jobDescription,jobImage,userId
    }) 
    await newJob.save()
    res.status(200).json(newJob)
}catch(err){
        res.status(401).json(err)
    }
}

// get all jobs api
exports.getAllJobs = async(req,res)=>{
    console.log("Inside Get All Jobs API");
    const searchKey = req.query.search
    const query = {
        jobTitle:{
            $regex:searchKey,$options:"i"
        }
        // skills:{
        //     $regex:searchKey,$options:"i"
        // }
    }
    try{
        const allJobs = await jobs.find(query)
        res.status(200).json(allJobs)

    }catch(err){
        res.status(401).json(err)

    }
}

// get user added jobs
exports.getUserJobs = async(req,res)=>{
    console.log("Inside User Added Jobs API");
    const userId = req.payload
    try{
        const userJobs = await jobs.find({userId})
        res.status(200).json(userJobs)

    }catch(err){
        res.status(401).json(err)
    }
}

// edit jobs
exports.editJob = async(req,res) =>{
    console.log("Inside edit job");
    const {jid} = req.params
    const userId = req.payload
    const {jobTitle,companyName,paymentScale,location,experience,jobTime,skills,jobDescription,jobImage} = req.body
    // if user wpload image value get  from file: or value from jobImage
    const uploadImage = req.file? req.file.filename:jobImage
    try{
        const updatedJob = await jobs.findByIdAndUpdate({_id:jid},
            {jobTitle,companyName,paymentScale,location,experience,jobTime,skills,jobDescription,jobImage:uploadImage,userId},
            {new:true})
            await updatedJob.save()
            res.status(200).json(updatedJob)
    }catch(err){
        res.status(401).json(err)
    }
} 

// delete job/using jid

exports.removeJob = async(req,res)=>{
    console.log("inside Remove Job API");
    const {jid} = req.params
    try{
        const removedJob = await jobs.findByIdAndDelete({_id:jid})
        res.status(200).json(removedJob)
        console.log(removedJob);
    }
    catch(err){
        res.status(401).json(err)
    }
}




