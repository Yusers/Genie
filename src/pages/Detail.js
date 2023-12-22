import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useCart } from '../components/CartContext/CartContext';

import {
  Paper,
  Typography,
  styled,
  Grid,
  Button,
  InputBase,
  FormControl,
  InputLabel,
  CircularProgress,
} from '@mui/material';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { toast } from 'react-toastify';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const Detail = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState({});
  const baseURL = `http://localhost:8081/api/product/${id}`;
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(baseURL, { method: 'GET', headers: { 'content-type': 'application/json' } })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setApiData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = (product) => {
    // Add logic to add the selected product to the cart
    toast.success('Thêm vào giỏ hàng thành công');
    addToCart(product);
  };

  const handleBuyNow = () => {
    // Add logic to proceed to checkout with the selected product
    navigate('/checkout');
  };

  return (
    <>
      <br />
      <Breadcrumb number={3} name={apiData.title} />
      <br />
      <Grid container spacing={3}>
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
          <>
            <Grid item xs={12} md={6}>
              <Paper>
                <img
                  src={`../${apiData.imageUrl}`}
                  alt={apiData.title}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <Typography variant='h5' component='div' style={{ padding: '16px' }}>
                  {apiData.title}
                </Typography>
                <Typography variant='body1' style={{ padding: '16px' }}>
                  {apiData.description}
                </Typography>
                <Typography variant='h6' style={{ padding: '16px' }}>
                  {apiData.material}
                </Typography>
                <Typography variant='h6' style={{ padding: '16px' }}>
                  {apiData.fit}
                </Typography>
                <Typography variant='h6' style={{ padding: '16px' }}>
                  Price: ${apiData.price}
                </Typography>
                <br />
                <FormControl sx={{ m: 1 }} variant='standard'>
                  <InputLabel htmlFor='demo-customized-textbox'>Số lượng</InputLabel>
                  <BootstrapInput
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    id='demo-customized-textbox'
                  />
                </FormControl>
                <br />
                <Button
                  variant='outlined'
                  onClick={() => handleSizeChange('S')}
                  style={{ margin: '8px' }}
                >
                  Size: S
                </Button>
                <Button
                  variant='outlined'
                  onClick={() => handleSizeChange('M')}
                  style={{ margin: '8px' }}
                >
                  Size: M
                </Button>
                <Button
                  variant='outlined'
                  onClick={() => handleSizeChange('L')}
                  style={{ margin: '8px' }}
                >
                  Size: L
                </Button>
                <br />
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => handleAddToCart(apiData)}
                  style={{ margin: '8px' }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handleBuyNow}
                  style={{ margin: '8px' }}
                >
                  Buy Now
                </Button>
                <br />
                <div style={{ padding: '8px', display: 'flex', alignContent: 'center' }}>
                  Share:{' '}
                  <Typography style={{ display: 'inline' }} variant='body2' component={'div'}>
                    <Link
                      to={'https://www.facebook.com/'}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FacebookIcon />
                    </Link>
                    <Link
                      to={'https://www.instagram.com/'}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <InstagramIcon />
                    </Link>
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Detail;
