import React, { useMemo, useState, useEffect } from 'react';
import { ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import BannerSection from '../../components/BannerSection';
import CategoryGrid from '../../components/CategoryGrid';
import { categories } from '../../data/categoriesData';
// @ts-ignore
import { lightTheme, darkTheme } from '../../config/theme.js';

const Home: React.FC = () => {
  // Leer preferencia inicial de localStorage o establecer un valor por defecto
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Actualizar localStorage cuando el modo cambia
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode: any) => !prevMode);
  };

  // Crear tema usando el estado actual de darkMode
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resetea estilos y aplica colores del tema */}
      <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
        <Header onToggleDarkMode={toggleDarkMode} />
        <BannerSection />
        <CategoryGrid categories={categories} />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
