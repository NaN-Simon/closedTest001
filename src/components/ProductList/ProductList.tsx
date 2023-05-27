import React from 'react';
import { Box, Container, Grid, List } from '@mui/material';
import productData from '../../data/productData';
import { IProduct } from '../../types';
import Product from '../Product/Product';
import AddProduct from '../AddProduct/AddProduct';

console.log(productData);

const ProductList = ({ productData }: { productData: IProduct[] }) => {
  const discriptionStyles = { display: { xs: 'none', sm: 'none', md: 'flex' } };
  return (
    <Container disableGutters>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
      >
        <Grid container spacing={0} sx={discriptionStyles}>
          <Grid item xs={3}>
            <span>Наименование</span>
          </Grid>
          <Grid item xs={3}>
            <span>Артикул</span>
          </Grid>
          <Grid item xs={3}>
            <span>Кол-во</span>
          </Grid>
          <Grid item xs={3}>
            <span>Цена</span>
          </Grid>
        </Grid>
      </Box>
      <List
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 3,
        }}
      >
        {productData.map((item: IProduct) => (
          <Product
            key={item.article}
            name={item.name}
            article={item.article}
            cost={item.cost}
            count={item.count}
          />
        ))}
        <AddProduct />
      </List>
    </Container>
  );
};
export default ProductList;
