const mongoose =require('mongoose')
require ('dotenv').config()


 exports.connectDB=()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGO_URI,err=>err?console.log(err):console.log('DB is connected ...'))
}

