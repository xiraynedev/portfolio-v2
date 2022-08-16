import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const SoftSkill: FC = () => {
  const languages = {
    title: 'Soft Skills',
    description: 'Patience, determination, accepting of positive and negative feedback, continual learning, and able to communicate effectively.',
  };

  return <SectionComponent {...languages} />;
};

