import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface SectionProps {
  title: string;
  description: string;
}

export const SectionComponent: FC<SectionProps> = ({ title, description }) => {
  return (
    <Stack borderBottom={1} paddingBottom={4}>
      <Typography variant='h3' mb={3} className='font-bold'>
        {title}
      </Typography>
      <Typography className='text-3xl'>{description}</Typography>
    </Stack>
  );
};
