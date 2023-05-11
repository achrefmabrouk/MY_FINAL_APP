import { Button,CssBaseline,FormControl, FormControlLabel,FormLabel, Radio, RadioGroup,TextField,Typography} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStaff } from "../Redux/StaffSlice";
import NavBar from '../Component/NavBar'
import SideBarManager from "../Component/SideBarManager";

const StaffForm = () => {
  const [newStaff, setNewStaff] = useState({});
  const HandleChange = (e) => {
    setNewStaff({ ...newStaff, [e.target.name]: e.target.value });
  };
  const Role=useSelector(state=>state.Staff.Staff)
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const staffadded = (e) => {
    e.preventDefault();

    dispatch(addStaff(newStaff));
   
  }; 
  return (
    <div style={{backgroundColor:'#EFD9CE'}}>
      <NavBar/>
      <SideBarManager/>
      <Container component="main" maxWidth="xs" style={{background:'#25283D',borderRadius:'9px',color:'#D4D5D7',display:'flex',justifyContent:'center',marginTop:'150px'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            fill in the form
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              onChange={HandleChange}
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
              fullWidth
              name="email"
              label="enter the  email "
              
              type="email"
              id="email"
              autoComplete="email"
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" style={{color:'#D4D5D7'}}>Role</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="employe"
                name="radio-buttons-group"
                
                onChange={HandleChange}
              >
                <FormControlLabel
                  name="role"
                  value="client"
                  control={<Radio />}
                  label="Client"
                />
                <FormControlLabel
                  name="role"
                  value="employe"
                  control={<Radio />}
                  label="Employe"
                />
              </RadioGroup>
            </FormControl>

            <Button
              onClick={staffadded}
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
  );
};

export default StaffForm;
