import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { SectionContainer } from './SectionContainer';

export const Education: FC = () => {
  const technicalEducation = {
    title:
      'Associate of Science Degree in Computer and Electronics Engineering Technology',
    description: `Acquired an Associate of Science degree while building knowledge of circuits, systems, and specialized techniques used in electronics and computer technology fields. Built analog and digital systems and worked with programmable logic controllers. Utilized high-level math and algorithms to work with electricity and modern electronic communications.`,
  };

  return (
    <>
      <Typography variant='h3' className='font-bold'>
        Education
      </Typography>
      <SectionContainer {...technicalEducation} />
    </>
  );
};
