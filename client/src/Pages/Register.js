import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ClearErrors, Register } from '../Redux/ManagerSlice';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const Registered = () => {
  const [newManager,setNewManager]=useState({})
  const HandleChange=(e)=>{
    setNewManager({...newManager, [e.target.name]:e.target.value})
  }
  
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const signUP = (e)=>{
     e.preventDefault()
     ClearErrors()
     dispatch(Register(newManager))
  
    //navigate('/Login')
  }
  
  const msg= useSelector(state=>state.manager.RegisterErrors)

  return (
    <div>
      
        <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(Image.png )',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2>Let's manage your work between team</h2>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            
            <Typography component="h1" variant="h5">
              Sign UP
            </Typography>
            
            <Box component="form"   sx={{ mt: 1 }}>
              <TextField
              onChange={HandleChange}
                margin="normal"
                required
                fullWidth
                id="name"
                label="enter name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              {msg  && msg?.name && <Alert severity="error">{msg?.name?.msg}</Alert>}
              <TextField
              onChange={HandleChange}
                margin="normal"
                required
                fullWidth
                id="company_name"
                label="enter company name"
                name="company_name"
                autoComplete="company_name"
                autoFocus
              />
             {msg  && msg?.company_name && <Alert severity="error">{msg?.company_name?.msg}</Alert>}
              <TextField
              onChange={HandleChange}
                margin="normal"
                required
                fullWidth
                id="address"
                label="enter address"
                name="address"
                autoComplete="address"
                autoFocus
              />
            {msg  && msg?.address && <Alert severity="error">{msg?.address?.msg}</Alert>}
              <TextField
              onChange={HandleChange}
                margin="normal"
                required
                fullWidth
                id="phone_number"
                label="enter phone number"
                name="phone_number"
                autoComplete="phone_number"
                autoFocus
              />
             {msg  && msg?.phone_number && <Alert severity="error">{msg?.phone_number?.msg}</Alert>}
              <TextField
              onChange={HandleChange}
                margin="normal"
                required
                fullWidth
                id="email"
                label="enter email address"
                name="email"
                autoComplete="email"
                autoFocus
              />
             {msg  && msg?.email && <Alert severity="error">{msg?.email?.msg}</Alert>}
              <TextField
              onChange={HandleChange}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
                          {msg  && msg?.password && <Alert severity="error">{msg?.password?.msg}</Alert>}

              <Button
                onClick={signUP}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              
              <Grid container>
                
                <Grid item>
                  <Link href="/Login" variant="body2">
                    {"You have an account? Sign in"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  )
}

export default Registered

