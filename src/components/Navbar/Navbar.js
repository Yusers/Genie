import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge'; // Added Badge component
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Added ShoppingCartIcon
import { Link as BrowserLink } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';

function Navbar(props) {
  const { sections, title } = props;
  const { cartItems } = useCart();

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size='small' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Subscribe
        </Button>

        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          sx={{ flex: 1 }}
        >
          <BrowserLink style={{ textDecoration: 'none', color: 'inherit' }} to='/'>
            {title}
          </BrowserLink>
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
        <Button variant='outlined' size='small'>
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <BrowserLink to={section.url} style={{ color: 'black' }} key={section.title}>
            <Link color='inherit' noWrap variant='body2' sx={{ p: 1, flexShrink: 0 }}>
              {section.title}
            </Link>
          </BrowserLink>
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
