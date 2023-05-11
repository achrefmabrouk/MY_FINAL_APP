

import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HostPage = () => {
  const navigate=useNavigate()
  return (
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'300px'}}  >
     
              
              <Button onClick={()=>navigate('/Login')} variant="contained" color="success" >Login as manager</Button>
                <Button onClick={()=>navigate('/LoginStaff')} variant="contained" color="success" >Login as Client/Employe</Button>
  
    </div>
  )
}

export default HostPage
