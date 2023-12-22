import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea, Skeleton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../CartContext/CartContext';

const CardProduct = ({ product, isLoading }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    toast.success('Thêm giỏ hàng thành công');
    addToCart(product);
  };

  const handleNavigate = () => {
    if (!isLoading) navigate(`/products/${product.id}`);
  };

  return (
    <Card>
      <CardActionArea onClick={handleNavigate}>
        {isLoading ? (
          <Skeleton variant='rounded' width={'100%'} height={300} />
        ) : (
          <CardMedia
            component='img'
            height='300'
            width='100'
            image={product.imageUrl}
            alt={product.title}
          />
        )}
      </CardActionArea>
      <CardContent>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/products/${product.id}`}>
          <Typography noWrap variant='h6' component='div' gutterBottom>
            {isLoading ? <Skeleton></Skeleton> : product.title}
          </Typography>
        </Link>
        <Typography variant='body2' color='text.secondary' gutterBottom>
          {isLoading ? <Skeleton></Skeleton> : `Giá: ${product.price}`}
        </Typography>
        {isLoading ? (
          <Skeleton width={150} />
        ) : (
          <Button variant='contained' color='inherit' onClick={() => handleAddToCart(product)}>
            Thêm vào giỏ hàng
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CardProduct;
