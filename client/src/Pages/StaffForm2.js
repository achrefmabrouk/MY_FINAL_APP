import { Button,CssBaseline,FormControl, FormControlLabel,FormLabel, Radio, RadioGroup,TextField,Typography} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {UpdateStaff } from "../Redux/StaffSlice";
import NavBarStaff from '../Component/NavBarStaff'
import SideBar from "../Component/SideBar";



const StaffForm2 = () => {
  const staff=useSelector(state=>state.Staff.staff)
  const [newUPStaff, setNewUPStaff] = useState({_id:staff._id});
  const HandleChange = (e) => {
    setNewUPStaff({ ...newUPStaff, [e.target.name]: e.target.value });
  };
 
  

  const dispatch = useDispatch();
  const staffupdated = (e) => {
    e.preventDefault();
     
    dispatch(UpdateStaff(newUPStaff));
    
  };
  return (
    <div  style={{backgroundColor:'#EFD9CE'}}>
      <NavBarStaff/>
      <SideBar/>
       <Container component="main" maxWidth="xs" style={{background:'#25283D',borderRadius:'9px',color:'#D4D5D7',display:'flex',justifyContent:'center',marginTop:'150px'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color:"#D4D5D7"
          }}
        >
          <Typography component="h1" variant="h5" color="#D4D5D7">
            fill in the form
          </Typography>
          <Box component="form" sx={{ mt: 1 }}style={{width:'260px'}}>
            <TextField
              onChange={HandleChange}
              defaultValue={staff.name}
              margin="normal"
              required
              fullWidth
              id="name"
              label="enter the name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              onChange={HandleChange}
              margin="normal"
              required
              defaultValue={staff.phone_number}
              fullWidth
              id="phone_number"
              label="enter your phone number"
              name="phone_number"
              autoComplete="phone_number"
              autoFocus
            />
         
            <TextField
              onChange={HandleChange}
              margin="normal"
              required
              fullWidth
              defaultValue={staff.email}
              name="email"
              label="enter the  email"
              type="email"
              id="email"
              autoComplete="email"
            />
            {(staff?.role=='employe')&&< FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Speciality</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="employe"
                name="radio-buttons-group"
                
                onChange={HandleChange}
              >
                <FormControlLabel
                  name="speciality"
                  value="UX/UI designer"
                  control={<Radio />}
                  label="UX/UI designer"
                />
                <FormControlLabel
                  name="speciality"
                  value="Front"
                  control={<Radio />}
                  label="Front"
                />
                <FormControlLabel
                  name="speciality"
                  value="Back"
                  control={<Radio />}
                  label="Back"
                />
                  <FormControlLabel
                  name="speciality"
                  value="Project Manager"
                  control={<Radio />}
                  label="Project Manager"
                />
              </RadioGroup>
            </FormControl>}
            {staff?.role=='client'&&  <TextField
              onChange={HandleChange}
              margin="normal"
              required
              defaultValue={staff.name_project}
              fullWidth
              name="name_project"
              label="enter your project"
              type="name_project"
              id="name_project"
              autoComplete="name_project"
            />
                }
            

          
            
            <Button
              onClick={staffupdated}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              REGISTER
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default StaffForm2
