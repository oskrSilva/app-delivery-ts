import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/pagination';
//@ts-ignore
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import bannerImage1 from '../assets/banner1.png';
import bannerImage2 from '../assets/banner2.png';
import bannerImage3 from '../assets/banner3.png';

const BannerSection: React.FC = () => {
  const images = [bannerImage1, bannerImage2, bannerImage3];

  return (
    <Box
      sx={{
        height: { xs: '25vh', sm: '35vh', md: '50vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        borderRadius: '20px',
        overflow: 'hidden',
        marginTop: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        style={{ width: '100%', height: '100%', borderRadius: '20px' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BannerSection;
