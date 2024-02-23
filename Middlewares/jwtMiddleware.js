const jwt = require('jsonwebtoken')

// this middleware is used to verify token
const jwtMiddleware = (req,res,next) =>{
    console.log("Inside JWT Middleware!!!");
    // key must be small letter
    const token = req.headers["authorization"].split(" ")[1]
    console.log("token:",token);
   try{
     if(token){
    const jwtResponse = jwt.verify(token,process.env.JWT_SECRET_KEY)
      console.log(jwtResponse); //response will be {userId:,iat:}
      req.payload = jwtResponse.userId
      next() 
        }else{
            res.status(406).json("Please provide Token..!!!")
        }
    }
    catch(err){
        res.status(401).json("Access Denied... Please Login!!!")
    }
}

module.exports = jwtMiddleware