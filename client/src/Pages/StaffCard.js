import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteStaff, GetStaff } from '../Redux/StaffSlice';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Component/NavBar'
import SideBarManager from '../Component/SideBarManager';



const StaffCard = () => {
    const navigate=useNavigate()
  const dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(GetStaff())
  },[])

  const Staffs=useSelector(state=>state.Staff.Staffs)
  return (
    <div>
    <NavBar/>
    <SideBarManager/>
    <div style={{display:'flex', flexWrap:'wrap', gap:'30px', marginTop:'100px',marginLeft:'50px'}}>
      {Staffs?.map((el,i)=>(

     
<Card sx={{ width: 345 }} style={{background:'#25283D',borderRadius:'9px',color:'#D4D5D7', marginLeft:'100px'}}>

<CardContent >
  <Typography gutterBottom variant="h5" component="div">
    <span>Name : </span>{el.name}
  </Typography>
  <Typography variant="body2" color="#D4D5D7">
  <span>Email : </span>{el.email}
  </Typography>
  <Typography variant="body2" color="#D4D5D7">
  <span>Role : </span>{el.role}
  </Typography>
  <Typography variant="body2" color="#D4D5D7">
  <span>Tel : </span>{el.phone_number}
  </Typography>
</CardContent>
<CardActions>

<Button onClick={()=>{dispatch(DeleteStaff(el._id)) 
  window.location.reload()} } variant="contained" color="success" > delete </Button>

</CardActions>
</Card>
      ))}
      
      
      

    </div>
    </div>
  )
}

export default StaffCard
