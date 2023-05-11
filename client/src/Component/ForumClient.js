import { Button, TextField } from '@mui/material'
import React from 'react'

const ForumClient = () => {
  return (
    <div>
       
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="enter the client's name"
              type="name"
              id="name"
              autoComplete="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="enter the client's email"
              type="email"
              id="email"
              autoComplete="email"
            />
            
    </div>
  )
}

export default ForumClient
