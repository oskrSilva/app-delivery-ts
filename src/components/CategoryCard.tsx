import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Category } from '../interfaces/category';

const CategoryCard: React.FC<Category> = ({ name, image }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={`Imagen de ${name}`} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Ver tiendas
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
