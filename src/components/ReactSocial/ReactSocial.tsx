import React, {FC} from 'react';
import {ProjectComponent} from '../ProjectComponent/ProjectComponent';

const reactSocialLarge = require('../../assets/react-social-large.webp');
const reactSocialMedium = require('../../assets/react-social-medium.webp');

export const ReactSocial: FC = () => {
  const reactSocialProps = {
    title: 'React Social',
    text: `The React Social project uses React with TypeScript to build a social media app. It is currently a work
    in progress.`,
    liveAnchorHref: 'https://react-social-v1.netlify.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/react-social',
    imageFull: reactSocialLarge,
    imageMedium: reactSocialMedium,
  };

  return (
    <ProjectComponent packageProps={reactSocialProps}/>
  );
};