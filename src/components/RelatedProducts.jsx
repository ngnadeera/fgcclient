import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const RelatedProducts = ({ currentProductId, products }) => {
  const relatedProducts = products.filter((product) => product.id !== currentProductId);

  return (
    <Grid container spacing={3}>
      {relatedProducts.slice(0, 4).map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RelatedProducts;
