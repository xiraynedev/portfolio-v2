import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const SoftSkill: FC = () => {
  const languages = {
    title: 'Soft Skills',
    description: 'Patience, determination, ability to handle positive and negative feedback, continual learning, and ability to communicate effectively.',
  };

  return <SectionComponent {...languages} />;
};

