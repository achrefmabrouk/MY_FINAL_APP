import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Redux/ManagerSlice";
import { Link, useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const manager = useSelector((state) => state.manager.manager);
  const isAuth = useSelector((state) => state.manager.isAuth);
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'#25283D',borderRadius:'20px', width:'1355px',height:'59px',left:'17px',top:'30px'}} position="absolute">
        {isAuth ? (
          <>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                
              </IconButton>

              <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
             <div style={{font:'inter',weight:'400px',size:'8px',lineHeight:'9.68px',align:'center'}} >
              {<span style={{width:'118px',height:'9px',top:'43px' }}>{manager?.name}
              <br/>
              <br/>
              <span style={{width:'118px',height:'9px',top:'64px' }}>{manager?.email}</span>
              </span> }
              </div>
              
              
             
            </Toolbar>
          </>
        ) : (
          <>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>

              <Typography component="div" sx={{ flexGrow: 1 }}></Typography>

              <Button as={Link} to ='/' color="inherit">Login</Button>
            </Toolbar>
          </>
        )}
      </AppBar>
    </Box>
  );
}
