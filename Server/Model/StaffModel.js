const mongoose=require('mongoose')


const StaffSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:['client','employe']
    },
    
    phone_number:String, 
    password:String,
    speciality:String,
    name_project:String

    
})


module.exports=mongoose.model('Staff',StaffSchema)