import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Experience: FC = () => {
  const experience = {
    title: 'Experience',
    description: `Three years experience with JavaScript and related libraries and frameworks. Currently work with React, Next.js, and TypeScript to build a variety of applications that connect to APIs and databases and work in cloud-native environments. Work in an agile environment to quickly iterate over new ideas and push code to production. Maintain a portfolio of applications while keeping all packages up to date.`,
  };

  return <SectionComponent {...experience} />;
};
