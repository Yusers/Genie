import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../CartContext/CartContext';

const CardProduct = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    toast.success('Thêm giỏ hàng thành công');
    addToCart(product);
  };

  return (
    <Card>
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/products/${product.id}`}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='300'
            width='100'
            image={product.imageUrl}
            alt={product.title}
          />
        </CardActionArea>
      </Link>
      <CardContent>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/products/${product.id}`}>
          <Typography noWrap variant='h6' component='div' gutterBottom>
            {product.title}
          </Typography>
        </Link>
        <Typography variant='body2' color='text.secondary' gutterBottom>
          Giá: ${product.price}
        </Typography>
        <Button variant='contained' color='inherit' onClick={() => handleAddToCart(product)}>
          Thêm vào giỏ hàng
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
