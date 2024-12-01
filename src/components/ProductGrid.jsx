import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.length == 0 && <p>no product to display under the category</p>}
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
