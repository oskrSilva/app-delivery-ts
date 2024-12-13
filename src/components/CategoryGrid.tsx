import CategoryCard from './CategoryCard';
import { Category } from '../interfaces/category';
import { Container, Typography, Grid } from '@mui/material';

interface Props {
  categories: Category[];
}

const CategoryGrid: React.FC<Props> = ({ categories }) => (
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
);

export default CategoryGrid;
