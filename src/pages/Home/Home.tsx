import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid, Container, Button } from '@mui/material';
import bannerImage from '../../assets/banner.png';
import CategoryCard from '../../components/CategoryCard';
import { Category } from '../../interfaces/category';

const categories: Category[] = [
  {
    id: 1,
    name: 'Ropa',
    image: 'https://http2.mlstatic.com/D_NQ_NP_892390-MLA74409705175_022024-O.webp',
  },
  {
    id: 2,
    name: 'Alimentos',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg814v2ia8wE-oJn_Rb4idN0Ih-SCXZsfOPiQO8ZQ7QnjaPxubcJIAYYrxCxYotcn0HIAAEbcAW1zOk4tCEUuKWUdTEoIpXwiRzkELmLfpu-wa1jvMgfOlA2IL6Y60ImiVC5rHs5sohq5U/s1600/comidas-rapidas-en-cali-ciudad-completa.jpg',
  },
  {
    id: 3,
    name: 'Librería',
    image: 'https://http2.mlstatic.com/D_NQ_NP_981561-MLA78799716334_092024-O.webp',
  },
  {
    id: 4,
    name: 'Helados',
    image: 'https://cuisinart.com.co/cdn/shop/articles/Helado_de_Fresa_Casero.jpg?v=1720632982&width=700',
  },
];

const Home: React.FC = () => {
  return (
    <Box>
      {/* Barra de navegación */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Multitienda
          </Typography>
          <Button color="inherit">Iniciar Sesión</Button>
        </Toolbar>
      </AppBar>

      {/* Sección del banner */}
      <Box
        sx={{
          height: '30vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
        }}
      >
        <img
          src={bannerImage}
          alt="Banner principal"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      {/* Sección de categorías */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Categorías
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.id}>
              <CategoryCard {...category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;