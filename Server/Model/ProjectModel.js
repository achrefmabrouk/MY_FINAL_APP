const mongoose=require('mongoose')


const ProjectSchema = new mongoose.Schema({
    project :String,
    task :[
        {
            tasks:String,
            isDone:{
                type:Boolean,
                default:false
            }
        }
    ],
    client:[String],
    employe:[String],
})


module.exports=mongoose.model('Project',ProjectSchema)