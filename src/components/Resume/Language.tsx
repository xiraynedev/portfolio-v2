import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Language: FC = () => {
  const languages = {
    title: 'Languages',
    description: 'English, Spanish',
  };

  return <SectionComponent {...languages} />;
};

