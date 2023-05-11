const { validationResult } = require('express-validator')
const Staff=require('../Model/StaffModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { sendpassword } = require('../config/nodemailer')
require ('dotenv').config()






const staffRegister = async (req,res)=>{
    try {
        const Errors = validationResult(req)
        if(!Errors.isEmpty()){
            return res.status(401).json({Errors:Errors.mapped()})
        }
        const {name,email,role}=req.body
        const found = await Staff.findOne({email})
        if (found){return res.status(402).json({message:'you are already existed '})
        }
        const caracters = '0123456789abcdefghijklmnopqrutsvwxyzABCDEFGHIJKLMNOPQRUTSVWXYZ!?%$#'
        let password= ''
        for (i=0;i<10;i++){
            password += caracters[Math.floor(Math.random() * caracters.length)]
        }
        
       //sendpassword(email,password)
        const saltRounds=bcrypt.genSaltSync(10)
        const hashedpassword= await bcrypt.hash(password, saltRounds );
        const newStaff= await Staff.create({name,email,password:hashedpassword,role})
        res.status(200).json({newStaff,msg:`${role} is added successfully`})
        
    } catch (error) {
        res.status(500).json({message:error})
    }
    }


    const GETAllStaff = async (req,res)=>{
        try {
            const users=await Staff.find({})
             res.status(200).json(users)
        } catch (error) {
            res.status(500).json({message:error})
        }
    }
    const UpdateStaff = async (req,res)=>{
        try {
            const UpdatedStaff = await Staff.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json(UpdatedStaff)
        } catch (error) {
            res.status(502).json({message:error})
        }
    }

    const DeleteStaff = async (req,res)=>{
        try {
            const deletedStaff = await Staff.findByIdAndDelete(req.params.id)
            res.status(200).json({deletedStaff,msg:'Staff deleted !'})
        } catch (error) {
            res.status(502).json({message:error})
    
        }
     }

     const StaffLogin =async (req,res)=>{
        try {
            const Errors = validationResult(req)
        if(!Errors.isEmpty()){
            return res.status(401).json({Errors:Errors.mapped()})
        }
        const {name,email,password,role,speciality,phone_number}=req.body
        const isFound = await Staff.findOne({email})
        if(!isFound){
            return res.status(401).json({message:'Wrong email or password'})
        }
        const isMatch =await bcrypt.compare(password, isFound.password)
        if(!isMatch){
            return res.status(402).json({message:'Wrong email or password '})
        }
        const tokenStaff = await jwt.sign({id: isFound._id}, process.env.SECRET, { expiresIn: '15d' })
        res.status(200).json({isFound,tokenStaff})
    
    
        } catch (error) {
            res.status(500).json({message:error})
        }
    }

    const GETEMAILclient = async (req,res)=>{
        try {
            const {name,email,password,role,speciality,phone_number}=req.body
            const user=await Staff.find({email} &&{role:'client'} )
             res.status(200).json(user)
        } catch (error) {
            res.status(500).json({message:error})
        }
    }
     
    const GETEMAILemploye = async (req,res)=>{
        try {
            const {name,email,password,role,speciality,phone_number}=req.body
            const user=await Staff.find({email} &&{role:'employe'} )
             res.status(200).json(user)
        } catch (error) {
            res.status(500).json({message:error})
        }
    }
    


    module.exports={staffRegister,GETAllStaff,UpdateStaff,DeleteStaff,StaffLogin,GETEMAILclient,GETEMAILemploye}











