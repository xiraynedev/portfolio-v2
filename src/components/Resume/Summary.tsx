import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Summary: FC = () => {
  const summary = {
    title: 'Summary',
    description: `Acquired extensive JavaScript knowledge while building full-stack applications with various libraries and frameworks. Looking to work in a fast-paced environment that provides continual challenges to improve my skills.`,
  };

  return <SectionComponent {...summary} />;
};
