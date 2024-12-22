import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Multitienda
      </Typography>
      <Button color="inherit" aria-label="Iniciar sesión">Iniciar Sesión</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
