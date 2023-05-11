const express=require('express')
const { body } = require('express-validator')
const router = express.Router()
const Staffcontroller=require('../Controllers/Staffcontroller')
const { Auth } = require('../Middlewares/authorization')
const { datavalidation } = require('../Middlewares/datavalidation')



router.post('/',body('email','Please enter a valid Email').isEmail(),Staffcontroller.staffRegister)
router.get('/',Auth,datavalidation,Staffcontroller.GETAllStaff)
router.put('/UpdateStaff/:id',Staffcontroller.UpdateStaff)
router.delete('/:id'/* ,Auth  */,Staffcontroller.DeleteStaff)
router.post('/LoginStaff',datavalidation,Staffcontroller.StaffLogin)
router.get('/emailClient',Staffcontroller.GETEMAILclient)
router.get('/emailEmploye',Staffcontroller.GETEMAILemploye)



module.exports=router