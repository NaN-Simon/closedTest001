import React from 'react';
import { List } from '@mui/material';
import productData from '../../data/productData';
import { IProduct } from '../../types';
import Product from '../Product/Product';
import AddProduct from '../AddProduct/AddProduct';

console.log(productData);

const ProductList = ({ productData }: { productData: IProduct[] }) => (
  <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
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
);
export default ProductList;
