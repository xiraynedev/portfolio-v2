import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Experience: FC = () => {
  const experience = {
    title: 'Experience',
    description:
      'Spent the last two years learning about many software technologies and building projects from scratch. Gained familiarity with build tools, Git, and GitHub. Experienced with JavaScript and several frontend libraries and frameworks. Able to use Linux for development tasks.',
  };

  return <SectionComponent {...experience} />;
};

