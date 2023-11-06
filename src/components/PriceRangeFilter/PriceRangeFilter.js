import React, { useState } from 'react';
import { Paper, Typography, Slider, Box } from '@mui/material';

const PriceRangeFilter = ({ onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([0, 100]); // Default range: 0 to 100

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
    onPriceChange(newValue);
  };

  return (
    <Paper style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h6' gutterBottom>
        Lọc Theo Giá
      </Typography>
      <Box sx={{ width: 200 }}>
        <Slider
          value={priceRange}
          onChange={handleChange}
          valueLabelDisplay='auto'
          aria-labelledby='range-slider'
          max={200} // Maximum price value
        />
      </Box>
      <Typography variant='body2' gutterBottom>
        Từ: ${priceRange[0]} - ${priceRange[1]}
      </Typography>
    </Paper>
  );
};

export default PriceRangeFilter;
