import React from 'react';
import { Box, Checkbox, FormGroup, FormControlLabel, Typography, Slider } from '@mui/material';

const FilterBar = ({ categories, onCategoryChange, priceRange, onPriceChange }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Categories
      </Typography>
      <FormGroup>
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                onChange={() => onCategoryChange(category)}
              />
            }
            label={category}
          />
        ))}
      </FormGroup>
      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={onPriceChange}
        valueLabelDisplay="auto"
        min={1000} // Adjust to match your minimum product price
        max={100000} // Adjust to match your maximum product price
      />
    </Box>
  );
};

export default FilterBar;
