import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import FilterBar from '../components/FilterBar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([1000, 10000]); // Default price range
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((cat) => cat !== category)
        : [...prevSelected, category]
    );
  };

  // Handle price range change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue); // Update the price range state
  };

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/categories`);
        setCategories(response.data.data); // Strapi wraps results in `data`
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [baseUrl]);

  // Fetch products whenever selected categories or price range changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Generate category filters
        const categoryFilters = selectedCategories
          .map((category) => `filters[categories][Name][$in]=${category}`)
          .join('&');

        // Add price range filters
        const priceFilters = `filters[price][$gte]=${priceRange[0]}&filters[price][$lte]=${priceRange[1]}`;

        // Combine all filters into the query string
        const query = `?${categoryFilters ? categoryFilters + '&' : ''}${priceFilters}&populate=*`;

        const response = await axios.get(`${baseUrl}/api/products${query}`);
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategories, priceRange, baseUrl]);

  const namesList = [];
categories.forEach((item) => {
  namesList.push(item.Name);
});

  if (products == null) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <Navbar />
      <Container>
        <FilterBar
          categories={namesList}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
        />
        <Typography variant="h4" sx={{ mt: 3, mb: 3 }}>
          Fragrances
        </Typography>
        <ProductGrid products={products} />
      </Container>
    </Box>
  );
};

export default Home;
