import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { Link as RouterLink } from 'react-router-dom';

export default function Breadcrumb({ number, name }) {
  return (
    <>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link
          underline='hover'
          component={RouterLink}
          to='/'
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Trang Chủ
        </Link>
        {number > 2 ? (
          <Link
            underline='hover'
            component={RouterLink}
            to='/products'
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize='inherit' />
            Sản Phẩm
          </Link>
        ) : (
          <Typography sx={{ display: 'flex', alignItems: 'center' }} color='text.primary'>
            <CheckroomIcon sx={{ mr: 0.5 }} fontSize='inherit' />
            {name}
          </Typography>
        )}
        {number > 2 && (
          <Typography sx={{ display: 'flex', alignItems: 'center' }} color='text.primary'>
            <CheckroomIcon sx={{ mr: 0.5 }} fontSize='inherit' />
            {name}
          </Typography>
        )}
      </Breadcrumbs>
    </>
  );
}
