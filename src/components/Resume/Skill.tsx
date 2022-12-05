import React, { FC } from 'react';
import { SectionContainer } from './SectionContainer';

export const Skill: FC = () => {
  const skills = {
    title: 'Skills',
    description: `React, Next.js, TypeScript, JavaScript, Node.js, Redux, HTML, CSS, SCSS, Tailwind CSS, Java, Python, C#, .NET, SQL, MongoDB, Django, Express.js, Git, GitHub, webpack, Maven, Linux, Docker, Google Cloud Platform, Amazon Web Services, Microsoft Azure`,
  };

  return <SectionContainer {...skills} />;
};
