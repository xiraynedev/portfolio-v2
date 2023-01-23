import React, { FC } from 'react';
import { SectionContainer } from './SectionContainer';

export const Summary: FC = () => {
  const summary = {
    title: 'Summary',
    description: `Several years of experience working with front-end technologies, like HTML, CSS, JS, and React. Experienced with backend development using Node.js and .NET. Familiar with the Scrum and Kanban frameworks. Excellent problem solver and team player.`,
  };

  return <SectionContainer {...summary} />;
};
