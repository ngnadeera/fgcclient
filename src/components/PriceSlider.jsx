import React from 'react';
import { Slider, Typography } from '@mui/material';

const PriceSlider = ({ value, onChange }) => {
  return (
    <div>
      <Typography gutterBottom>Price Range</Typography>
      <Slider
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        min={1000}
        max={10000}
      />
    </div>
  );
};

export default PriceSlider;
