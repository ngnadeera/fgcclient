import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  const [products, setProducts] = useState([]);
  const baseUrl = process.env.REACT_APP_API_BASE_URL; 
  console.log(baseUrl);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
        const response = await axios.get(`${baseUrl}/api/products`);
        setProducts(response.data.data); // Strapi wraps results in `data`
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <Box>
      <Navbar />
      <Container>
        <Typography variant="h4" sx={{ mt: 3, mb: 3 }}>
          Fragrances
        </Typography>
        {/* Pass products to ProductGrid */}
        <ProductGrid products={products} />
        
      </Container>
    </Box>
  );
};

export default Home;
