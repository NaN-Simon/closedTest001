import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Dialog, TextField } from '@mui/material';
import { FC, useState } from 'react';

const LoginForm:FC = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setOpenPopup(true);
        }}
      >
        Log In
      </Button>
      <Dialog
        open={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            rowGap: '25px',
            minWidth: 320,
            maxWidth: 450,
            width: '100%',
            padding: '25px',
          }}
        >
          <Typography variant="h5" ml="5px">
            Log In
          </Typography>
          <TextField
            id="name"
            label="Full name"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="email"
            label="Email address"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: '100px',
              p: '14px',
              fontSize: '18px',
              fontWeight: 700,
              textTransform: 'inherit',
              color: '#ffffff',
            }}
          >
            Log In
          </Button>
        </Box>
      </Dialog>
    </div>
  );
};

export default LoginForm;
