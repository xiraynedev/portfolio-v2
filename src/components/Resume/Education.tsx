import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import { SectionContainer } from './SectionContainer';

export const Education: FC = () => {
  const databaseEducation = {
    title: 'Database Administration and Development',
    description: `SetFocus - Parsipanny, New Jersey -
       Knowledge of SQL databases including designing, implementing, maintaining, and administering SQL Server databases.`,
  };

  const technicalEducation = {
    title: 'Computer and Electronics Engineering Technology',
    description: `Knowledge of circuits, systems, and specialized techniques used in electronics and computer technology fields. Acquired extensive programming knowledge with several computer programming languages.`,
  };

  return (
    <>
      <Typography variant='h3' className='font-bold'>
        Education
      </Typography>
      <SectionContainer {...databaseEducation} />
      <SectionContainer {...technicalEducation} />
    </>
  );
};
