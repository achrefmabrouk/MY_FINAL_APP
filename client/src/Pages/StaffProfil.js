import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavBarStaff from '../Component/NavBarStaff'
import SideBar from '../Component/SideBar'
import EmployeProject from './EmployeProject'
import ClientProject from './ClientProject'


const StaffProfil = () => {
  const navigate=useNavigate()
  const staff = useSelector((state) => state.Staff.staff)
 
  return (
    <div>
      <NavBarStaff />
      <SideBar/>
      
      <Button style={{display:'flex',justifyContent:'space-around',marginTop:'100px',marginLeft:'1200px'}} onClick={()=>(staff.role=='employe')?navigate('/StaffForm2'):navigate('/Staffform2Client') } variant="contained" color="success">Update your info</Button> 
    
    {staff.role=='employe'?<EmployeProject/>:<ClientProject/>}
    </div>
  )
}


export default StaffProfil
