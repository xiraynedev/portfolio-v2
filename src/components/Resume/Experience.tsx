import React, { FC } from 'react';
import { SectionContainer } from './SectionContainer';

export const Experience: FC = () => {
  const experience = {
    title: 'Experience',
    description: `Experienced with numerous tools, libraries, and frameworks, including ASP.NET Core, MVC, Blazor, Razor Pages, and SQL Server 2019 and 2022. Familiar with the software development process while utilizing GitHub Actions for CI/CD. Knowledge of agile frameworks, including Scrum and Kanban.`,
  };

  return <SectionContainer {...experience} />;
};
