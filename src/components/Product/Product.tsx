import React, { FC } from 'react';
import {
  Box,
  Grid,
  Checkbox,
  Container,
  IconButton,
  ListItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IProduct } from '../../types';

const Product: FC<IProduct> = ({ name, article, count, cost }) => {
  const discriptionStyles = { display: { xs: 'flex', sm: 'flex', md: 'none' } };
  const gridItemStyles = {
    display: 'flex',
    justifyContent: { xs: 'center', sm: 'center', md: 'start' },
    gap: { xs: '5px', sm: '5px', md: '0' },
    whiteSpace: 'nowrap',
  };

  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: { xs: 'center', sm: 'center', md: 'end' },
        width: { sx: 'auto', sm: 'auto', md: '100%' },
        gap: '10px 0',
        m: 0,
        p: 0,
      }}
    >
      <Container
        disableGutters
        sx={{
          display: 'flex',
          alignItems: 'center',
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            width: '100%',
            gap: '10px',
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              width: '100%',
              gap: '10px 0',
            }}
          >
            <Grid item xs={3} sx={gridItemStyles}>
              <Box component="span" sx={discriptionStyles}>
                Наименование:
              </Box>
              <Box component="span">{name}</Box>
            </Grid>
            <Grid item xs={3} sx={gridItemStyles}>
              <Box component="span" sx={discriptionStyles}>
                Артикул:
              </Box>
              <Box component="span">{article}</Box>
            </Grid>
            <Grid item xs={3} sx={gridItemStyles}>
              <Box component="span" sx={discriptionStyles}>
                Кол-во:
              </Box>
              <Box component="span">{count}</Box>
            </Grid>
            <Grid item xs={3} sx={gridItemStyles}>
              <Box component="span" sx={discriptionStyles}>
                Цена:
              </Box>
              <Box component="span">
                {cost}
                ₽
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{ bottom: '0%', right: '0%' }}>
        <Checkbox sx={{ m: 0, p: 0 }} />
        <IconButton sx={{ m: 0, p: 0 }}>
          <EditIcon color="primary" />
        </IconButton>
        <IconButton sx={{ m: 0, p: 0 }}>
          <DeleteIcon color="primary" />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default Product;
