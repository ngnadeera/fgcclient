import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/products/${id}?populate=*`);
        setProduct(response.data.data); // Strapi wraps the result in `data`
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id, baseUrl]);

  if (!product) return <Typography>Loading...</Typography>;

  // Destructure product attributes
  const { name, price, description, volume, marknewproduct, image } = product;

  // Extract image URL (use the `url` of the first image if available)
  const imageUrl = image?.[0]?.formats?.medium?.url || image?.[0]?.url;
  const fullImageUrl = `${baseUrl}${imageUrl}`; // Prepend the base URL
  
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            {imageUrl ? (
              <img src={fullImageUrl} alt={name} width="100%" />
            ) : (
              <img src="https://via.placeholder.com/300" alt="Placeholder" width="100%" />
            )}
          </Grid>

          {/* Product Info */}
          <Grid item xs={12} md={6}>
            {marknewproduct && (
              <Box sx={{ bgcolor: 'green', color: 'white', p: 0.5, mb: 1 }}>
                NEW
              </Box>
            )}
            <Typography variant="h4" gutterBottom>
              {name}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {volume}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Price: Rs. {price}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Buy Now
            </Button>
          </Grid>
        </Grid>

        {/* Description */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description[0]?.children[0]?.text || ''}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetail;
