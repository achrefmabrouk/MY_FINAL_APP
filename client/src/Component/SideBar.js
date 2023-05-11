import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../Redux/StaffSlice'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const staff = useSelector((state) => state.Staff.staff)
  const dispatch=useDispatch()
  const navigate=useNavigate()


  return (
    <div  class="container-fluid">
    <div class="row">
      <nav class="sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              
              <a class="nav-link active" href="/StaffProfil">
               <h2>⌂</h2>
                
              </a>
            </li>
            <li class="nav-item">
            {(staff.role==='employe')?
            <a class="nav-link" href="/EmployeProject">
              <h2>🗁</h2>
              </a>:
               <a class="nav-link" href="/ClientProject">
               <h2>🗁</h2>
               </a>
              }
          
            </li>
            <li class="nav-item">

            {(staff.role==='employe')?  <a class="nav-link" href="/Staffform2">
               <h2>⚙</h2>
              </a>:<a class="nav-link" href="/Staffform2Client">
               <h2>⚙</h2>
              </a>}
            </li>
            <li>
            <Button  style={{marginTop:'380px',color:'white'}} onClick={()=>{dispatch(Logout()) 
                navigate('/')}} color="inherit">LogOut</Button>
            </li>
          </ul>
        </div>
      </nav>
  

       

    </div>
  </div>
  
  )
}

export default SideBar
