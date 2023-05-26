import React from 'react';
import { Container } from '@mui/material';
import ProductList from '../../components/ProductList/ProductList';
import productData from '../../data/productData';
import Header from '../../components/Header/Header';

const StartPage = () => (
  <Container>
    <Header />
    <ProductList productData={productData} />
  </Container>
);

export default StartPage;
