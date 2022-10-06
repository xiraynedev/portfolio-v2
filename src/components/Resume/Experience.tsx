import React, { FC } from 'react';
import { SectionComponent } from './SectionComponent';

export const Experience: FC = () => {
  const experience = {
    title: 'Experience',
    description: `Three years experience with JavaScript and related libraries and frameworks. Mostly work with React, Next.js, and
TypeScript to build a variety of projects that connect to APIs and databases in addition to building projects for cloud-native environments.
Completed Project: Next News - Next.js and TypeScript version of Hacker News complete with state management,
login/logout functionality with Firebase Authentication, full-text search, forgot password reset option, sorting, submit
posts, discuss comments, and pagination.`,
  };

  return <SectionComponent {...experience} />;
};
