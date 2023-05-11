
exports.Authmanager =async (req,res,next)=>{


const {email,password,role,name}=req.body

if(role!=='manager'){
    return res.status(404).json({message:'You are not manager !!!'})
}
next()
}