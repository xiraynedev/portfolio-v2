import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Experience: FC = () => {
  const experience = {
    title: 'Experience',
    description: `Three years experience with JavaScript and related libraries and frameworks. Mostly work with React, Next.js, and TypeScript to build a variety of applications that connect to APIs and databases and work in cloud-native environments. Work in an agile environment while collaborating with team members. Implement CI/CD pipelines through GitHub Actions.`,
  };

  return <SectionComponent {...experience} />;
};
