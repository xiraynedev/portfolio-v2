import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Experience: FC = () => {
  const experience = {
    title: 'Experience',
    description: `Spent the last three years working with JavaScript and related libraries and frameworks. Mostly work with React, Next.js, and TypeScript to build a variety of projects that connect to APIs and databases in addition to building projects for cloud-native environments.`,
  };

  return <SectionComponent {...experience} />;
};
