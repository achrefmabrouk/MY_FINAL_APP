import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProject, GetProject } from '../Redux/ProjectSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Component/NavBar'
import SideBarManager from '../Component/SideBarManager';



const ProjectCard = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(GetProject())
  },[])

  const projects=useSelector(state=>state.project.projects)
  
  return (
    <div>
    <NavBar/>
    <SideBarManager/>
    <div style={{display:'flex',flexWrap:'wrap', gap:'30px',marginTop:'100px',marginLeft:'50px'}}>
      {(projects)?.map((el,i)=>(

     
<Card   key={i} sx={{ maxWidth: 345 }} style={{background:'#25283D',borderRadius:'9px',color:'#D4D5D7',marginLeft:'100px'}}>

 

<CardContent  >
  <Typography variant="body2" color="white">
 <span>PROJECT : </span> {(el.project)}
  </Typography>
</CardContent>


  <CardContent >
        <Typography paragraph> 
               {<span>CLIENT</span>}
              {(el.client)?.map(user=><ul>
                <li>{user}</li>
              </ul>)}
       </Typography>
        <Typography paragraph> 
               {<span>EMPLOYE</span>}
                 {(el.employe)?.map(em=><ul>
                     <li>{em}</li>
                        </ul>)}
         </Typography>
         <Typography paragraph>
                 {<span>TASK</span>}
                 {(el.task)?.map(ta=><ul>
                   <li className={`${ta.isDone ? 'green' : 'red'}`}>{ta.tasks}{ta.isDone? '✔':'❌'}</li>
                 </ul>)}
         </Typography>
    
    
   
  </CardContent>
  <div style={{display:'flex' , justifyContent:'space-around'}}>
   <Button onClick={()=>{navigate('/ProjectUpdate/' +  el._id)}} variant="contained" color="success" > update </Button> 
  <Button onClick={()=>{dispatch(DeleteProject(el._id))}} variant="contained" color="success" > delete </Button>
  </div>
</Card>
      ))}
      
       
    </div>
    </div>
  )
}

export default ProjectCard
