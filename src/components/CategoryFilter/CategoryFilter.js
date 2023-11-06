import React, { useState } from 'react';
import { Paper, Typography, Checkbox, FormControlLabel } from '@mui/material';

const CategoryFilter = ({ categories, onCategoryChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  };

  return (
    <Paper style={{ padding: '16px' }}>
      <Typography variant='h6' gutterBottom>
        Category Filter
      </Typography>
      {categories.map((category) => (
        <FormControlLabel
          key={category}
          control={
            <Checkbox
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
          }
          label={category}
        />
      ))}
    </Paper>
  );
};

export default CategoryFilter;
