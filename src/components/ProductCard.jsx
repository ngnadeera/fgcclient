import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const imageUrl = product.image?.[0]?.formats?.medium?.url || product.image?.[0]?.url;
  const fullImageUrl = `${baseUrl}${imageUrl}`; // Prepend the base URL
  console.log("img",fullImageUrl);
  
  return (

    <>

    <Card sx={{ maxWidth: 300 }}>
      <Link to={`/product/${product.documentId}`} style={{ textDecoration: 'none', color: 'inherit' }}>

        <CardMedia
          component="img"
          height="300"
          image={imageUrl ? (
            <img src={fullImageUrl} alt={"Placeholder"} />
          ) : (
            <img src="https://via.placeholder.com/300" alt="Placeholder" width="100%" />
          )}
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
    </>
  );
};

export default ProductCard;
