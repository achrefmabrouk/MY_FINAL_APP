const mongoose=require('mongoose')



const Managerschema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'manager'
    },
    company_name:String,
    address:String,
    phone_number:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Manager',Managerschema)