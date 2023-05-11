const mongoose=require('mongoose')



const Employeschema = new mongoose.Schema({
   email:String,
   _id:String
})

module.exports=mongoose.model('Employe',Employeschema)