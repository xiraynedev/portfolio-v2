import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Experience: FC = () => {
  const experience = {
    title: 'Experience',
    description: `Spent the last three years working with JavaScript and related libraries and frameworks. Have also worked with Python, Django, and SQL to build full-stack applications. Mostly work with Node.js, Next.js, React, and TypeScript.`,
  };

  return <SectionComponent {...experience} />;
};
