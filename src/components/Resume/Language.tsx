import React, { FC } from 'react';
import { SectionContainer } from './SectionContainer';

export const Language: FC = () => {
  const languages = {
    title: 'Languages',
    description: `English, Spanish`,
  };

  return <SectionContainer {...languages} />;
};
