import React from 'react';
import { Box } from '@mui/material';
import BannerSection from '../../components/BannerSection';
import CategoryGrid from '../../components/CategoryGrid';
import { categories } from '../../data/categoriesData';
import Header from '../../components/Header';

const Home: React.FC = () => (
  <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
    <Header/>
    <BannerSection />
    <CategoryGrid categories={categories} />
  </Box>
);

export default Home;
