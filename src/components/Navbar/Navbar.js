import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge'; // Added Badge component
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Added ShoppingCartIcon
import { Link as BrowserLink, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';
import { toast } from 'react-toastify';

function Navbar(props) {
  const { sections, title } = props;
  const { cartItems } = useCart();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    if (isOnline) {
      toast.success('Kết nối thành công');
    } else {
      toast.error('Mất kết nối mạng', { autoClose: 10000 });
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isOnline]);

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button
          onClick={() => navigate('/sign-up')}
          size='small'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Sign Up
        </Button>

        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          sx={{ flex: 1 }}
          onClick={() => navigate('/')}
        >
          {title}
        </Typography>
        <IconButton sx={{ fontSize: 'small' }}>
          <SearchIcon />
        </IconButton>
        <IconButton component={BrowserLink} to='/view-cart' sx={{ fontSize: 'small' }}>
          {/* Added cart link */}
          <Badge badgeContent={cartItems.length} color='error'>
            {/* Replace 2 with cartItems.length */}
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Button onClick={() => navigate('/sign-in')} variant='outlined' size='small'>
          Sign In
        </Button>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            onClick={() => navigate(section.url)}
            key={section.title}
            color='inherit'
            noWrap
            variant='body2'
            sx={{
              p: 1,
              flexShrink: 0,
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Navbar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
