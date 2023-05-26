import React, { FC } from 'react';
import { Container, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddProduct: FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '301px',
        height: '372px',
        boxShadow: '3px 3px 3px 0px rgb(130 129 129 / 69%);',
        borderRadius: '2px',
        background: '#f4f4f4',
      }}
    >
      <IconButton sx={{ scale: '4' }}>
        <AddIcon color="primary" fontSize="large" />
      </IconButton>
    </Container>
  );
};

export default AddProduct;
