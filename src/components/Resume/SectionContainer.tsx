import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface SectionProps {
  title: string;
  description?: string;
  firstParagraph?: string;
  secondParagraph?: string;
}

export const SectionContainer: FC<SectionProps> = ({
  title,
  description,
  firstParagraph,
  secondParagraph,
}) => {
  return (
    <Stack borderBottom={1} paddingBottom={4}>
      <Typography variant='h3' mb={3} className='font-bold'>
        {title}
      </Typography>
      <Stack spacing={3}>
        {firstParagraph && (
          <Typography className='text-3xl'>{firstParagraph}</Typography>
        )}
        {secondParagraph && (
          <Typography className='text-3xl'>{secondParagraph}</Typography>
        )}
        {description && (
          <Typography className='text-3xl'>{description}</Typography>
        )}
      </Stack>
    </Stack>
  );
};
