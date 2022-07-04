import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import React, { FC } from 'react';
import { Summary } from './Summary';
import { Experience } from './Experience';
import { Skill } from './Skill';
import { Education } from './Education';
import { Language } from './Language';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const Resume: FC = () => {
  return (
    <Stack
      direction='column'
      spacing={2}
      marginY={4}
      marginX='auto'
      width='90%'
      mb={3}
    >
      <Stack spacing={1} mb={2}>
        <Typography variant='h1' pb={2}>
          Raymond Cortes
        </Typography>
        <Typography className='text-4xl'>xiraynedev@gmail.com</Typography>
        <Typography className='text-4xl'>954-225-1870</Typography>
        <Typography className='text-4xl'>Location</Typography>
        <Typography className='text-4xl'>Coconut Creek, FL</Typography>
      </Stack>
      <Summary />
      <Experience />
      <Skill />
      <Education />
      <Language />
      <Stack direction='row' pt={3}>
        <Link to='/'>
          <Button variant='contained'>Return to Portfolio</Button>
        </Link>
      </Stack>
    </Stack>
  );
};

