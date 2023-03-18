import React from 'react'
import { Toolbar,Typography,AppBar } from '@mui/material'
import "./Banner.css"

function Banner() {
  return (
    <AppBar position="sticky" id="banner" >
    <Toolbar>
      <Typography variant="h6" component="div">
        Genesis
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default Banner