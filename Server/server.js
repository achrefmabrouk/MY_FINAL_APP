const express = require('express')
const { connectDB } = require('./config/connectDB')
require ('dotenv').config()
const app=express()
const ManagerRouter =require('./Routes/ManagerRouter')
const projectRouter=require('./Routes/ProjectRouter')

const StaffRouter=require('./Routes/StaffRouter')





app.use(express.json())
app.use('/api/manager',ManagerRouter)
app.use('/api/project',projectRouter)
app.use('/api/staff',StaffRouter)





connectDB()

Port=process.env.PORT
app.listen(Port ,err=>err?console.log(err):console.log('server is running...'))