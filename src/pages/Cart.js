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
} from '@mui/material';
import { useCart } from '../components/CartContext/CartContext';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

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
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar alt={item.title} src={item.imageUrl} />
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={`$${item.price}`} />
            <Button
              variant='contained'
              color='secondary'
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant='h6' style={{ marginTop: '16px' }}>
        Total: ${totalPrice}
      </Typography>
    </Paper>
  );
};

export default Cart;
