import React, { FC } from 'react';
import { SectionContainer } from './SectionContainer';

export const Summary: FC = () => {
  const summary = {
    title: 'Summary',
    description: `Acquired extensive JavaScript knowledge while building full-stack applications with various libraries and frameworks. Seeking to enter the software development field with knowledge of numerous software technologies, continual study,
    and the ability to work independently or in team environments.`,
  };

  return <SectionContainer {...summary} />;
};
