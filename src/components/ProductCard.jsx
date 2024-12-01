import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          {product.isNew && (
            <Box sx={{ bgcolor: 'red', color: 'white', p: 0.5, mb: 1 }}>
              NEW
            </Box>
          )}
          <Typography gutterBottom variant="h6">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
      </Link>
      <Button variant="contained" color="primary" sx={{ mt: 1 }}>
        Buy Now
      </Button>
    </Card>
  );
};

export default ProductCard;
