/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import {
  Box, Checkbox, IconButton, ListItem, Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IProduct } from '../../types';

const Product: FC<IProduct> = ({
  name, article, count, cost,
}) => {
  return (
    <ListItem
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '301px',
        height: '372px',
        boxShadow: '3px 3px 3px 0px rgb(130 129 129 / 69%);',
        borderRadius: '2px',
        background: '#f4f4f4',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Typography align="center">Наименование: {name}</Typography>
        <Typography align="center">Артикул: {article}</Typography>
        <Typography align="center">Кол-во: {count}</Typography>
        <Typography align="center">Цена: {cost}₽</Typography>
      </Box>

      <Box sx={{ position: 'absolute', bottom: '10%', right: '10%' }}>
        <Checkbox />
        <IconButton>
          <EditIcon color="primary" />
        </IconButton>
        <IconButton>
          <DeleteIcon color="primary" />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default Product;
