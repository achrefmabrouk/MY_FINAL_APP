import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProjectClient } from '../Redux/ProjectSlice'
import NavBarStaff from '../Component/NavBarStaff'
import SideBar from '../Component/SideBar'


const ClientProject = () => {
    const projectClient=useSelector(state=>state.project.projects)
 
  const dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(GetProjectClient())
  },[])
  if(projectClient && projectClient.length==0) {
    return( <div>
      <h2>you have no projects</h2>
    </div>)
  }
  return (
    <div>
    <NavBarStaff />
    <SideBar/>
    <div style={{display:'flex',flexWrap:'wrap', gap:'30px',marginTop:'150px',marginLeft:'50px'}}>
    {(projectClient)?.map((el,i)=>(
   <Card key={i} sx={{ maxWidth: 345 }} style={{background:'#25283D',borderRadius:'9px',color:'#D4D5D7',marginLeft:'100px'}}>

<CardContent >

<Typography gutterBottom variant="h5" component="div">
<span>PROJECT : </span>  {el?.project}
</Typography>
<Typography variant="body2" color="#D4D5D7">
{(el?.task)?.map(tas=><ul>
    <li> <span>TASK : </span> {tas.tasks}    {tas.isDone? '✅':'❌'}</li>
</ul>)}
</Typography>

</CardContent>
<CardActions>

</CardActions>
</Card>
    ))}
 </div>
 </div>
)
}

export default ClientProject
