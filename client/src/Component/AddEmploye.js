//import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { GETEMAILemploye } from '../Redux/StaffSlice';

const AddEmploye = ({setEmployees}) => {
  const [newProject, setNewProject] = useState({});
  const HandleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch()
/*     const [inputs, setInputs] = useState([]);
    const handleClick = () => {
        setInputs([...inputs, ""]);
      };
       
      const handleInputChange = (event, index) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
        setEmployees(newInputs)
      }; */
      //const project = useSelector(state=>state.project.project)
      const employes=useSelector(state=>state.Staff.employe)
      React.useEffect(() => {
        dispatch(GETEMAILemploye())
      }, []);
  return (
    <div>
 {/*        <Button variant="contained" color="success" onClick={handleClick}>
                {" "}
                ADD Employe (EMAIL)
              </Button>
              {inputs.map((value, index) => (
                <TextField
                  fullWidth
                  key={index}
                  defaultValue={project.employe}
                  label={`employe's email ${index + 1}`}
                  value={value}
                  onChange={(event) => handleInputChange(event, index)}
                />
              ))}
                */}


<DropdownButton variant="success" id="dropdown-basic-button" title="Employe(EMAIL)">
                <FormControl>
  
  <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
  {employes.map(el=>(
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    // defaultValue="employe"
    name="radio-buttons-group"
    
   
  >
    <FormControlLabel
     onChange={HandleChange}
      name="employe"
      value={el.email}
      control={<Radio />}
      label={el.email}
    />
   
  </RadioGroup>))}
</FormControl>
</DropdownButton>

    </div>
  )
}

export default AddEmploye
