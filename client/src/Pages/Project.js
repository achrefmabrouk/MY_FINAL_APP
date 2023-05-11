import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Component/NavBar'
import SideBarManager from '../Component/SideBarManager'
import ProjectCard from './projectCard'
import StaffCard from './StaffCard'

const Project = () => {
  const navigate=useNavigate()
  return (
    <div>
      <NavBar/>
      <SideBarManager/>
      
      <Button style={{marginLeft:'1200px' , marginTop:'100px'}} onClick={()=>navigate('/Project2')} variant="contained" color="success">+🖿</Button>
      <ProjectCard  />
      <Button style={{marginLeft:'1200px' , marginTop:'100px'}}  onClick={() => navigate("/StaffForm")} variant="contained" color="success" > +👤 </Button>
      <StaffCard/>
    </div>

  )
}

export default Project
