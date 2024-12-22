import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Category } from '../interfaces/category';
import { useNavigate } from 'react-router-dom';

const CategoryCard: React.FC<Category> = ({ name, image }) => {
  const navigate = useNavigate()
  const handleCardClick = ()=>{
    navigate(`store/:${name}`)
  }
  return (
    <Card onClick={handleCardClick}>
      <CardMedia component="img" height="140" image={image} alt={`Imagen de ${name}`} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
