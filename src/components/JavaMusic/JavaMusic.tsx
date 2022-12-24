import React, { FC } from 'react';
import { ApplicationContainer } from '../ApplicationContainer/ApplicationContainer';

const javaMusicLarge = require('../../assets/images/java-music-large.webp');
const javaMusicMedium = require('../../assets/images/java-music-medium.webp');

export const JavaMusic: FC = () => {
  const javaMusicProps = {
    title: 'Java Music',
    text: `The Java Music player was built with Java and compiled with Maven. It has options for playing, stopping, resetting, and changing songs. An option to quit the player is also included.`,
    sourceAnchorHref: 'https://github.com/xiraynedev/java-music',
    imageFull: javaMusicLarge,
    imageMedium: javaMusicMedium,
  };

  return <ApplicationContainer applicationProps={javaMusicProps} />;
};
