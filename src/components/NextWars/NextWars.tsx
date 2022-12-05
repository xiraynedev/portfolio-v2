import React, { FC } from 'react';
import { ApplicationContainer } from '../ApplicationContainer/ApplicationContainer';

const nextWarsLarge = require('../../assets/images/next-wars-large.webp');
const nextWarsMedium = require('../../assets/images/next-wars-medium.webp');

export const NextWars: FC = () => {
  const nextWarsProps = {
    title: 'Next Wars',
    text: `Next Wars was built with Next.js, TypeScript, and MUI to retrieve data from the Star Wars API. Multiple endpoints are provided to fetch a list of people and planets. The application can sort JSON data.`,
    liveAnchorHref: 'https://next-wars.vercel.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/next-wars',
    imageFull: nextWarsLarge,
    imageMedium: nextWarsMedium,
  };

  return <ApplicationContainer applicationProps={nextWarsProps} />;
};
