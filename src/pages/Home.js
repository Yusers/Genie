import React, { useEffect, useState } from 'react';
import Parallax from '../components/Parallax/Parallax';
import MainFeatures from '../components/MainFeatures/MainFeatures';
import CardProduct from '../components/CardProduct/CardProduct';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';

const baseUrl = 'https://65487df3dd8ebcd4ab22f4d0.mockapi.io/products';

const posts = [
  {
    title: 'Weekly Outfit',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'assets/image/carousel-1.png',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  },
  {
    title: 'Title of a ',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'assets/image/carousel-2.png',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  },
];

export default function Home() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(baseUrl, { method: 'GET', headers: { 'content-type': 'application/json' } })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        setApiData(data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <>
      <Container>
        <MainFeatures posts={posts} />
        <br />
        <Typography variant='h3' gutterBottom>
          NEW ARRIVALS
        </Typography>
        <Grid container spacing={4}>
          {isLoading ? (
            <Grid item alignItems={'center'} xs={12}>
              <Typography variant='h2' color={'inherit'}>
                <CircularProgress />
              </Typography>
            </Grid>
          ) : (
            apiData.map((data) => (
              <Grid key={data.id} item xs={12} sm={6} md={4} lg={3}>
                <CardProduct product={data} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
}
