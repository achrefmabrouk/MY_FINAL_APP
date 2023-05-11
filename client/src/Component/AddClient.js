
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { GETEMAILclient } from '../Redux/StaffSlice';


/* 
  const [inputs, setInputs] = useState([]);

  const handleClick = () => {
    setInputs([...inputs, ""]);
  };
  
  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
    setClients(newInputs)
  };
  const project = useSelector(state=>state.project.project) */
  const AddClient = ({setClients}) => {
  const clients=useSelector(state=>state.Staff.clients)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(GETEMAILclient())
  }, []);
  return (
    <div>
{/*          <Button variant="contained" color="success" onClick={handleClick}>
                {" "}
                ADD Client (Email)
              </Button>
              {inputs.map((value, index) => (
                <TextField
                  fullWidth
                  defaultValue={project.client}
                  key={index}
                  label={`client's email ${index + 1}`}
                  value={value}
                  onChange={(event) => handleInputChange(event, index)}
                />
              ))}
 */}

<DropdownButton id="dropdown-basic-button" title="Client (EMAIL)">
     {clients.map(el=>(
      <Dropdown.Item href="#/action-1">{el.email}</Dropdown.Item>
     ))}
    </DropdownButton>

    </div>
  )
}

export default AddClient
