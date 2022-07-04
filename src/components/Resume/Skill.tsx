import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Skill: FC = () => {
  const skills = {
    title: 'Skills',
    description:
      'TypeScript, JavaScript, Node.js, Express.js, React, Next.js, Git, GitHub, webpack, HTML, CSS, SCSS, Tailwind CSS, Linux, Google Cloud Platform, Amazon Web Services, Microsoft Azure',
  };

  return <SectionComponent {...skills} />;
};
