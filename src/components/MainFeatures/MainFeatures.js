import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './MainFeatures.css'; // Import your CSS file

function MainFeatures(props) {
  const { posts } = props;
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [posts.length]);

  const handleNext = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handlePrev = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  const post = posts[currentPostIndex];

  return (
    <Paper
      className='parallax-element carousel-slide'
      data-speed='0.5'
      style={{ transition: 'transform 0.5s' }} // Add transition style
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component='h1' variant='h3' color='inherit' gutterBottom>
              {post.title}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              {post.description}
            </Typography>
            <Link variant='subtitle1' href='#'>
              {post.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
      <IconButton sx={{ position: 'absolute', top: '50%', left: 0 }} onClick={handlePrev}>
        <ChevronLeftIcon />
      </IconButton>
      <IconButton sx={{ position: 'absolute', top: '50%', right: 0 }} onClick={handleNext}>
        <ChevronRightIcon />
      </IconButton>
    </Paper>
  );
}

MainFeatures.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      imageText: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MainFeatures;
