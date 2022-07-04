import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import React, { FC } from 'react';

export const Resume: FC = () => {
  return (
    <Stack direction='column' spacing={2} margin={4}>
      <Stack>
        <Typography variant='h2'>Raymond Cortes</Typography>
        <Typography variant='h4'>xiraynedev@gmail.com</Typography>
        <Typography variant='h4'>954-225-1870</Typography>
        <Typography variant='h4'>Location</Typography>
        <Typography variant='h4'>Coconut Creek, FL</Typography>
      </Stack>
    </Stack>
  );
};

