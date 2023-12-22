import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemAvatar,
  Avatar,
  Box,
  ListItemIcon,
  Checkbox,
  CardActionArea,
  TextField,
  InputAdornment,
} from '@mui/material';
import { useCart } from '../components/CartContext/CartContext';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handleRemoveFromCart = (productId) => {
    toast.success('Xóa khỏi giỏ hàng thành công');
    removeFromCart(productId);
  };

  return (
    <Paper style={{ padding: '16px' }}>
      <Typography variant='h5' gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                color: '#333',
                // Remove the 'flex' property here
              }}
            >
              <Checkbox edge='start' tabIndex={-1} disableRipple />
              <ListItemAvatar>
                <Avatar alt={item.title} src={item.imageUrl} />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  width: '22rem',
                }}
                primary={item.title}
                secondary={`$${item.price}`}
              />
              <ListItemText
                sx={{
                  width: '22rem',
                }}
                primary={item.material}
                secondary={item.fit}
              />
              <TextField
                label='Số lượng'
                id='outlined-start-adornment'
                defaultValue={item.quantity}
                sx={{
                  m: 1,
                  width: '10ch',
                }}
              />
            </ListItemIcon>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Xóa
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant='h6' style={{ marginTop: '16px' }}>
          Total: ${totalPrice}
        </Typography>
        <Button onClick={() => navigate('/checkout')} variant='contained' color='secondary'>
          Thanh Toán
        </Button>
      </Box>
    </Paper>
  );
};

export default Cart;
