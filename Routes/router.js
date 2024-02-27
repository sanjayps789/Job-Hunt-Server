const express = require('express') 
const emailsController = require('../Controllers/emailsController')
const userController = require('../Controllers/userController')
const jobController = require('../Controllers/jobController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
const router = new express.Router()

// register api  path       //handlerFunction
router.post('/register',userController.register)

// login api
router.post('/login',userController.login)

// add-job api - using router specific Middleware
router.post('/add-job',jwtMiddleware,multerConfig.single('jobImage'),jobController.addJob)

// get-all-jobs - using router specific middleware to verify token
router.get('/get-all-jobs',jwtMiddleware,jobController.getAllJobs)

// get-user-jobs - using router specific middleware to verify token
router.get('/get-user-jobs',jwtMiddleware,jobController.getUserJobs)

// edit-job api
router.put('/job/edit/:jid',jwtMiddleware,multerConfig.single('jobImage'),jobController.editJob)

// remove-job api
router.delete('/remove-job/:jid',jwtMiddleware,jobController.removeJob)

// update profile 
router.put('/edit-profile',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)

// node-mailer setup 
router.post('/send-email',emailsController.sendEmail)
// exporting router
module.exports = router






