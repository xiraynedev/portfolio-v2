import React, { FC } from 'react';
import { SectionContainer } from './SectionContainer';

export const Experience: FC = () => {
  const experience = {
    title: 'Experience',
    description: `Several years experience working with JavaScript building complex applications that securely store data in cloud databases, provide authentication and authorization to users, and increase the performance of applications while making them responsive to mobile devices. Applications include using Next.js to retrieve REST API JSON to display to clients, converting between different audio formats in C# with multiple processes, searching the NPM registry for packages while keeping track of state with the Redux Toolkit, searching a file system for file sizes by using different threads, using Python and Django to perform CRUD operations on a SQLite database to work with book information, using Java to create a music player that randomly selects different songs to play, and having a portfolio of applications built entirely from scratch using React, TypeScript, Tailwind CSS, GSAP for animations, and webpack.`,
  };

  return <SectionContainer {...experience} />;
};
