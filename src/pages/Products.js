import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct/CardProduct';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import PriceRangeFilter from '../components/PriceRangeFilter/PriceRangeFilter';
import { useCart } from '../components/CartContext/CartContext';

export default function Products() {
  const baseUrl = 'https://65487df3dd8ebcd4ab22f4d0.mockapi.io/products';
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]); // Default range: 0 to 100

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

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

  useEffect(() => {
    // Filter products based on selected categories and price range
    const filteredProducts = apiData.filter((product) => {
      const isInRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      return isInRange;
    });
    setFilteredData(filteredProducts);
  }, [apiData, priceRange]);

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  return (
    <>
      <Breadcrumb number={1} name={'Sản Phẩm'} />
      <Typography variant='h3' style={{ textAlign: 'center' }} gutterBottom>
        NEW ARRIVALS
        <PriceRangeFilter priceRange={priceRange} onPriceChange={handlePriceChange} />
      </Typography>
      <Grid container spacing={4}>
        {isLoading ? (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress sx={{ color: 'white' }} />
          </div>
        ) : (
          filteredData.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} md={4} lg={3}>
              <CardProduct
                product={data}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
