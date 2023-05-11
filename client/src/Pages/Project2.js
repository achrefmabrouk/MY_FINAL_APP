import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useDispatch, useSelector } from "react-redux";
import { ClearErrors, addProject } from "../Redux/ProjectSlice";
import { useNavigate } from "react-router-dom";
//import {addTask} from '../Redux/TaskSlice'
//import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { GETEMAILclient, GETEMAILemploye } from "../Redux/StaffSlice";
import Form from 'react-bootstrap/Form';
//import { Alert, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import NavBar from '../Component/NavBar'
import SideBarManager from "../Component/SideBarManager";


const Project2 = () => {
  const [newProject, setNewProject] = useState({});
  const HandleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };
  const [eclient,setEclient] = useState([])
  const HandleChangeEclient =(e)=>{
    const name = e.target.name;
    const isChecked = e.target.checked;
    const email = e.target.value
    
    if (isChecked) {
      setEclient([...eclient,email]);
    }
    else {
      setEclient(eclient.filter((e) => e !== email));
    }
  }

  const [eemploye,setEemploye] = useState([])
  const HandleChangeeemploye =(e)=>{
    const name = e.target.name;
    const isChecked = e.target.checked;
    const email = e.target.value
    
    if (isChecked) {
      setEemploye([...eemploye,email]);
    }
    else {
      setEemploye(eemploye.filter((e) => e !== email));
    }
  }


  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projectadded = (e) => {
    e.preventDefault();
    ClearErrors()
   //dispatch(addTask({task:inputs}))
   dispatch(addProject({...newProject,client:eclient,employe:eemploye,task:inputs.map(el=>{
    return {
      tasks:el
    }
   })}))
     
   //{msg && <Alert severity="error">{msg?.msg}</Alert>}
  navigate("/projectCard");
  };
  const Manager = useSelector((state) => state.manager.manager);
  const [inputs, setInputs] = useState([]);

  const handleClick = () => {
    setInputs([...inputs, ""]);
  };
  
  React.useEffect(() => {
    dispatch(GETEMAILclient())
  }, []);
  React.useEffect(() => {
    dispatch(GETEMAILemploye())
  }, []);
  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };


  const clientss=useSelector(state=>state.Staff.clients)
  const employes=useSelector(state=>state.Staff.employe)
  const msg = useSelector(state=>state.project.msg)
  return (
    <div style={{backgroundColor:'#EFD9CE'}}>
      <NavBar/>
      <SideBarManager/>
      {Manager?.role == "manager" && (
        <Container  component="main" maxWidth="xs"style={{background:'#25283D',borderRadius:'9px',color:'#D4D5D7',display:'flex',justifyContent:'center',marginTop:'150px'}}>
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
            <Box component="form" sx={{ mt: 1 }} style={{width:'260px'}}>
              <TextField
                onChange={HandleChange}
                margin="normal"
                required
                fullWidth
                id="project"
                label="enter the name of your project"
                name="project"
                autoComplete="project"
                autoFocus
                
              />
              
         
<br/>
<br/>
<DropdownButton variant="success" id="dropdown-basic-button" title="Client (EMAIL) ">
<br/>
<br/>

{clientss.map(el=>(
    <Form>
      
        <Form.Check 
          type='checkbox'
          label={el.email}
          name="client"
          value={el.email}
          onChange={HandleChangeEclient}
          
        />
      
    
  </Form>
))}



            </DropdownButton>

   
            <br/>
            
                <DropdownButton variant="success" id="dropdown-basic-button" title="Employe (EMAIL)">

                {employes.map(el=>(
    <Form>
      <div className="mb-3">
        <Form.Check 
          type={'checkbox'}
          label={el.email}
          name="employe"
          value={el.email}
          onChange={HandleChangeeemploye}
          id={`default-checkbox`}
        />
      </div>
    
  </Form>
))}


</DropdownButton>
<br/>

              <Button style={{width:'260px'}} variant="contained" color="success" onClick={handleClick}>
                {" "}
                ADD TASK
              </Button>
              {inputs.map((value, index) => (
                <TextField
                  fullWidth
                  key={index}
                  label={`Task ${index + 1}`}
                  value={value}
                  onChange={(event) => handleInputChange(event, index)}
                />
              ))}

              <Button
              style={{width:'260px'}}
                onClick={projectadded}
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
      )}
    </div>
  );
};

export default Project2;
