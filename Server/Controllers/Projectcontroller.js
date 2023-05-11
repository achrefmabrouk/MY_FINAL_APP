const Project=require('../Model/ProjectModel')
const Staff=require('../Model/StaffModel');



const AddProject = async (req,res)=>{
try {
    
   const  {project,task,client,employe} = req.body;
    let clients = await Staff.find({ email: { $in: client } });
    let employees = await Staff.find({ email: { $in: employe } });

    

    const clientsId = clients.map(element => element._id.toString());
    const employeesId = employees.map(element => element._id.toString()); 


   

   const newProject= await Project.create({project,task,client :clientsId ,employe :employeesId })
   
   res.status(200).json({newProject,msg:'Project created successfully'})
   
   
   
} catch (error) {
    res.status(502).json({message:error})
}
}

const GetProject  = async (req,res)=>{
    try {
   
        const getproject = await Project.find({})
        const staffs=await Staff.find({})
        getproject.map(el=>{
            el.client= el.client.map(elt=>{
              const staff=staffs.find(s=>s._id.toString()===elt);
              
              if (staff){  
                
                  return staff.email
              }
              return elt 
             })
              return el
          })
           getproject.map(els=>{
            els.employe= els.employe.map(elts=>{
              const staff=staffs.find(st=>st._id.toString()===elts);
              
              if (staff){    
                  return staff.email
              }
              return elts 
             })
              return els
          }) 
        
        res.status(200).json(getproject)
    } catch (error) {
        res.status(502).json({message:error})
    }
}
const UpdateProject = async (req,res)=>{
    try {
        const UpdatedProject = await Project.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(UpdatedProject)
    } catch (error) {
        res.status(502).json({message:error})
    }
}
const UpdateTask =async(req,res)=>{
try {
    const {projectId} = req.body;
    let projectfound = await  Project.findById(projectId)
   
    if (projectfound){
        const taskfound=projectfound.task.findIndex(el=>{
          
            return  el._id.toString()===req.params.id;
           
        })
        
        if(taskfound>-1){
      projectfound.task[taskfound].isDone=!projectfound.task[taskfound].isDone
      const updatedTask = await Project.findByIdAndUpdate({_id:projectId},projectfound)
    
        }
        
    }

    res.status(200).json(({success:true})) 

    
} catch (error) {
    res.status(502).json({message:error})
}

} 
 
 const DeleteProject = async (req,res)=>{
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id)
        res.status(200).json({deletedProject,msg:'project deleted !'})
    } catch (error) {
        res.status(502).json({message:error})

    }
 }
 const GETProjectClient = async (req,res)=>{
    try {

        let projet=await Project.find({client:req.UserId} )
        const staffs=await Staff.find({})
        projet.map(el=>{
          el.client= el.client.map(elt=>{
            const staff=staffs.find(s=>s._id.toString()===elt);
            
            if (staff){    
                return staff.email
            }
            return elt 
           })
            return el
        })
        
         res.status(200).json(projet)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const GETProjectEmploye = async (req,res)=>{
    try {

        const projet2=await Project.find({employe: req.UserId} )
        const staffs2=await Staff.find({})
        projet2.map(el=>{
          el.employe= el.employe.map(elt=>{
            const staff=staffs2.find(s=>s._id.toString()===elt);
            
            if (staff){    
                return staff.email
            }
            return elt 
           })
            return el
        })

        const staffs=await Staff.find({})
        projet2.map(el=>{
          el.client= el.client.map(elt=>{
            const staff=staffs.find(s=>s._id.toString()===elt);
            
            if (staff){    
                return staff.email
            }
            return elt 
           })
            return el
        })
         res.status(200).json(projet2)
         
    } catch (error) {
        res.status(500).json({message:error})
    }
}



module.exports={AddProject ,GetProject,UpdateProject,DeleteProject,GETProjectClient,GETProjectEmploye,UpdateTask}