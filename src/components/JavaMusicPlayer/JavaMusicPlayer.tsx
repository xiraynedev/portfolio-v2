import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const javaMusicPlayerLarge = require('../../assets/images/java-music-player-large.webp');
const javaMusicPlayerMedium = require('../../assets/images/java-music-player-medium.webp');

export const JavaMusicPlayer: FC = () => {
  const javaMusicPlayerProps = {
    title: 'Java Music Player',
    text: `This project is a music player built with Java and compiled with Maven. It has options for playing, stopping, resetting, and changing songs. An option to quit the player is also included.`,
    sourceAnchorHref: 'https://github.com/xiraynedev/java-music-player',
    imageFull: javaMusicPlayerLarge,
    imageMedium: javaMusicPlayerMedium,
  };

  return <ProjectComponent packageProps={javaMusicPlayerProps} />;
};
