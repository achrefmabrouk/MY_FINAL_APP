import React from 'react'
import { Logout } from '../Redux/ManagerSlice'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SideBarManager = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div  class="container-fluid">
    <div class="row">
      <nav class="sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              
              <a class="nav-link active" href="/Project">
               <h2>⌂</h2>
                
              </a>
            </li>
            <li class="nav-item">
           
            <a class="nav-link" href="/ProjectCard">
              <h2>🗁</h2>
              </a>
          
            </li>
           
           <li class="nav-item">
           
           <a class="nav-link" href="/StaffCard">
             <h2>👥</h2>
             </a>
         
           </li>
           <li>
           <Button style={{marginTop:'380px',color:'white'}} onClick={()=>{dispatch(Logout()) 
                navigate('/')}} color="inherit">LogOut</Button>
           </li>
           
         
          </ul>
         
        </div>
      </nav>
  

       

    </div>
  </div>
  
  )
}

export default SideBarManager
