import React, { FC } from 'react';
import { Container, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddProduct: FC = () => {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: { xs: '300px', sm: '300px', md: '100%' },
        height: { xs: '372px', sm: '372px', md: '70px' },
        boxShadow: '3px 3px 3px 0px rgb(130 129 129 / 69%);',
        borderRadius: '2px',
        background: '#f4f4f4',
        m: 0,
        p: 0,
      }}
    >
      <IconButton sx={{ scale: { xs: '3', sm: '3', md: '1' } }}>
        <AddIcon color="primary" fontSize="large" />
      </IconButton>
    </Container>
  );
};

export default AddProduct;
