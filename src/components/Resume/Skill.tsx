import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Skill: FC = () => {
  const skills = {
    title: 'Skills',
    description: `C#, Java, Python, TypeScript, JavaScript, React.js, SQL, Django, Node.js, Express.js, Next.js, .NET, Git, GitHub, webpack, HTML, CSS, SCSS, Tailwind CSS, Linux, Docker, MongoDB, Google Cloud Platform, Amazon Web Services, Microsoft Azure`,
  };

  return <SectionComponent {...skills} />;
};
