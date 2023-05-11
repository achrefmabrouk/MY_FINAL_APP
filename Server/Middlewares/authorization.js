const jwt=require('jsonwebtoken')
require('dotenv').config()


exports.Auth =async (req,res,next)=>{
    const token =req.header('token')
    if(!token){
        return res.status(404).json({message:'You are not authorized !!!'})
    }
    
    const decoded = jwt.verify(token, process.env.SECRET);
    req.UserId=decoded.id
    next()
}

