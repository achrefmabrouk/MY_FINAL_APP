const express = require('express')
const router = express.Router()
const Projectcontroller = require('../Controllers/Projectcontroller')
const { Auth } = require('../Middlewares/authorization')





router.post('/', Auth, Projectcontroller.AddProject)
router.get ('/',/* Auth, */Projectcontroller.GetProject)
router.put('/:id',/* Auth, */Projectcontroller.UpdateProject)
router.put('/tasks/:id',Projectcontroller.UpdateTask)
router.delete('/:id',Auth,Projectcontroller.DeleteProject)
router.get ('/projectclient',Auth,Projectcontroller.GETProjectClient)
router.get ('/projectemploye',Auth,Projectcontroller.GETProjectEmploye)

module.exports=router