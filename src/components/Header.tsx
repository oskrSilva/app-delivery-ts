import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';


interface HeaderProps {
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleDarkMode }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        My App
      </Typography>
      <IconButton color="inherit" onClick={onToggleDarkMode}>
        {/* Cambia el ícono según el modo */}
        <DarkModeIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;

