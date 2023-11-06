import React from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <>
      <Box
        sx={{ backgroundColor: '#fff', color: '#000', py: 5, px: { xs: 2, md: 5 } }}
        component='div'
      >
        <Container>
          <Grid container spacing={5}>
            <Grid item lg={4} md={12} mb={5}>
              <Typography variant='h5' mb={3}>
                <span style={{ color: 'inherit' }}>GENIE</span>
              </Typography>
              <Typography variant='body1' color={'inherit'}>
                Welcome to GENIE! We are passionate about fashion and committed to providing
                high-quality, stylish clothing for every occasion.
              </Typography>
            </Grid>
            <Grid item lg={8} md={12}>
              <Grid container spacing={5}>
                <Grid item md={4} mb={5}>
                  <Typography variant='h6' mb={4}>
                    Get In Touch
                  </Typography>
                  <Typography variant='body1' mb={2}>
                    <LocationOnIcon style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    Thành phố Hồ Chí Minh, Quận 5
                  </Typography>
                  <Typography variant='body1' mb={2}>
                    <PhoneIcon style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    +012 345 67890
                  </Typography>
                  <Typography variant='body1'>
                    <EmailIcon style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    genie@gmail.com
                  </Typography>
                </Grid>
                <Grid item md={4} mb={5}>
                  <Typography variant='h6' mb={4}>
                    Explore
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Link href='#' color='inherit' mb={2}>
                      About Us
                    </Link>
                    <Link href='#' color='inherit' mb={2}>
                      Our Collection
                    </Link>
                    <Link href='#' color='inherit'>
                      Contact Us
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={4} mb={5}>
                  <Typography variant='h6' mb={4}>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Link href='#' color='inherit' mb={2}>
                      Facebook
                    </Link>
                    <Link href='#' color='inherit' mb={2}>
                      Instagram
                    </Link>
                    <Link href='#' color='inherit'>
                      Twitter
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: '#111111', color: '#fff', py: 4, px: { xs: 2, md: 5 } }}>
        <Container>
          <Grid container justifyContent='space-between'>
            <Grid item xs={12} md={6} textAlign='center' textAlignMd='left' mb={{ xs: 3, md: 0 }}>
              <Typography variant='body2'>&copy; 2023 GENIE. All Rights Reserved.</Typography>
            </Grid>
            <Grid item xs={12} md={6} textAlign='center' textAlignMd='right'>
              <Box sx={{ display: 'flex', justifyContent: 'center', justifyContentMd: 'flex-end' }}>
                <Link href='#' color='inherit' px={1}>
                  Privacy
                </Link>
                <Link href='#' color='inherit' px={1}>
                  Terms
                </Link>
                <Link href='#' color='inherit' px={1}>
                  FAQs
                </Link>
                <Link href='#' color='inherit' px={1}>
                  Help
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
