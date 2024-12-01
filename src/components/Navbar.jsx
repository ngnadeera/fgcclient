import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Chris Luxury Scents
        </Typography>
        <Button color="inherit">Perfumes</Button>
        <Button color="inherit">Essential Oils</Button>
        <Button color="inherit">Insense Oils</Button>
        <Button color="inherit">Candles</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
