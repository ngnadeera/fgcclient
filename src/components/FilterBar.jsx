import React from 'react';
import { Box, Checkbox, FormGroup, FormControlLabel, Typography } from '@mui/material';
import PriceSlider from './PriceSlider';

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
            control={<Checkbox onChange={() => onCategoryChange(category)} />}
            label={category}
          />
        ))}
      </FormGroup>
      <PriceSlider value={priceRange} onChange={onPriceChange} />
    </Box>
  );
};

export default FilterBar;
