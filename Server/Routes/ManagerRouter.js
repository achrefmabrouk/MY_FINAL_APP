const express=require('express')
const router = express.Router()
const Managercontroller=require('../Controllers/Managercontroller')
const { Auth } = require('../Middlewares/authorization')
const { datavalidation } = require('../Middlewares/datavalidation')



router.post('/Register',datavalidation,Managercontroller.Register)
router.post('/Login',datavalidation,Managercontroller.Login)


module.exports=router