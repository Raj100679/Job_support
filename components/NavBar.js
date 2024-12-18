// Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, CssBaseline, ThemeProvider, IconButton, Box } from '@mui/material';
import { darkTheme } from '../theme'; // Assuming your theme is in a separate file

const Navbar = () => {
  return (
    <>
      
      <AppBar position="relative"
  sx={{
    backgroundColor: '#000000', // Set background color to black
  }}> {/* Removed sticky positioning */}
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,height:100}}>
          {/* Logo Image */}
          <IconButton  >
            <img src="/logo_2.png" alt="Logo" style={{ height: 100, width: 100 }} /> {/* Made the logo larger */}
          </IconButton>

          {/* Buttons Section */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button sx={{color: "#90caf9",fontWeight:700,fontSize:15,fontFamily: "'Roboto', sans-serif"}} >Home</Button>
            <Button sx={{color: "#90caf9",fontWeight:700,fontSize:15,fontFamily: "'Roboto', sans-serif"}}>About</Button>
            <Button sx={{color: "#90caf9",fontWeight:700,fontSize:15,fontFamily: "'Roboto', sans-serif"}}>Job Support</Button>
            <Button sx={{color: "#90caf9",fontWeight:700,fontSize:15,fontFamily: "'Roboto', sans-serif"}}>Trainings</Button>
            <Button sx={{color: "#90caf9",fontWeight:700,fontSize:15,fontFamily: "'Roboto', sans-serif"}}>Work With Us?</Button>
            <Button sx={{color: "#90caf9",fontWeight:700,fontSize:15,fontFamily: "'Roboto', sans-serif"}}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
      </>
  );
};

export default Navbar;
