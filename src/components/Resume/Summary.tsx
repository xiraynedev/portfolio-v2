import React, { FC } from 'react';
import { SectionContainer } from './SectionContainer';

export const Summary: FC = () => {
  const summary = {
    title: 'Summary',
    description: `Seeking to enter the software development field with knowledge of numerous software technologies, continual study, and the ability to work independently or in team environments.`,
  };

  return <SectionContainer {...summary} />;
};
