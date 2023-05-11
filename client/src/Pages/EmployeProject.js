import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProjectEmploye, ToggleTask } from '../Redux/ProjectSlice'
import NavBarStaff from '../Component/NavBarStaff'
import SideBar from '../Component/SideBar'


const EmployeProject = () => {
  const projectEmploye=useSelector(state=>state.project.projects)
  
  const dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(GetProjectEmploye())
  },[])
  const taskupdated=(taskId,projectId)=>{
    dispatch(ToggleTask({_id:taskId,projectId}));
    setTimeout(()=>{
      window.location.reload()},1)
  }
  if(projectEmploye && projectEmploye.length==0) {
    return( <div>
      <h2>you have no projects</h2>
    </div>)
  }
  return (
    <div>
    <NavBarStaff />
    <SideBar/>
    <div style={{display:'flex',flexWrap:'wrap', gap:'30px',marginTop:'110px',marginLeft:'50px'}}>
       {(projectEmploye)?.map((el,i)=>(
      <Card key={i} sx={{ maxWidth: 345 }} style={{background:'#25283D',borderRadius:'9px',color:'#D4D5D7' , marginLeft:'100px'}}>

<CardContent  >

  <Typography gutterBottom variant="h5" component="div">
   <span>PROJECT : </span> {el?.project}
  </Typography>
  <Typography variant="body2" color="#D4D5D7" >
  {<span>TASK</span>}
{(el?.task)?.map(t=><ul >
  
  <li className={`${t.isDone ? 'green' : 'red'}`}  style={{display:'flex',justifyContent:'space-around' }}
  >{t.tasks} {t.isDone? '✔':'❌'}
  <Button onClick={()=>taskupdated(t._id,el._id)} variant="contained" color="success">{t.isDone? 'UnDone' : 'Done'}</Button> </li>

</ul>)}
  </Typography>
  <Typography variant="body2" color="#D4D5D7">
{(el.client)?.map(cl=><ul>
  <li><span>CLIENT : </span>{cl}</li>
</ul>)}
  </Typography>
</CardContent>

</Card>
       ))}
    </div>
    </div>
  )
}

export default EmployeProject
