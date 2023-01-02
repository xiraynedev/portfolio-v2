import React, { FC } from 'react';
import { SectionContainer } from './SectionContainer';

export const Skill: FC = () => {
  const skills = {
    title: 'Skills',
    description: `C#, .NET, ASP.NET, SQL Server, React.js, Next.js, TypeScript, JavaScript, Node.js, Redux, Git, GitHub, HTML, CSS, SCSS, Tailwind CSS, Java, Python, MongoDB, Django, Express.js, REST APIs, webpack, Maven, Linux, Docker, AWS, Azure, GCP`,
  };

  return <SectionContainer {...skills} />;
};
