import React from 'react';
import { Box } from '@mui/material';
import bannerImage from '../assets/banner.png';

const BannerSection: React.FC = () => (
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
);

export default BannerSection;
