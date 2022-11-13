import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const nextWarsLarge = require('../../assets/images/next-wars-large.webp');
const nextWarsMedium = require('../../assets/images/next-wars-medium.webp');

export const NextWars: FC = () => {
  const nextWarsProps = {
    title: 'Next Wars',
    text: `This project is built with Next.js, TypeScript, and MUI to retrieve data from the Star Wars API. The project is designed around two endpoints. The people endpoint retrieves all people and displays some of their information. The planets endpoint retrieves planet information and replaces the URLs in the residents arrays with the names of the residents.`,
    liveAnchorHref: 'https://next-wars.vercel.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/next-wars',
    imageFull: nextWarsLarge,
    imageMedium: nextWarsMedium,
  };

  return <ProjectComponent packageProps={nextWarsProps} />;
};
