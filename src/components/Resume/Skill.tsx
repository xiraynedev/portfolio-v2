import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Skill: FC = () => {
  const skills = {
    title: 'Skills',
    description: `React, Next.js, TypeScript, Java, Python, SQL, MongoDB, Node.js, Django, Express.js, Git, GitHub, webpack, Maven, HTML, CSS, SCSS, Tailwind CSS, Linux, Docker, Google Cloud Platform, Amazon Web Services, Microsoft Azure`,
  };

  return <SectionComponent {...skills} />;
};
