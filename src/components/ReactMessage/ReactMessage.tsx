import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const reactMessageLarge = require('../../assets/images/react-message-large.webp');
const reactMessageMedium = require('../../assets/images/react-message-medium.webp');

export const ReactMessage: FC = () => {
  const reactMessageProps = {
    title: 'React Message',
    text: `A React project for sending messages to a panel, dynamically creating buttons, and changing color themes.`,
    liveAnchorHref: 'https://react-message-v1.netlify.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/react-message',
    imageFull: reactMessageLarge,
    imageMedium: reactMessageMedium,
  };

  return <ProjectComponent packageProps={reactMessageProps} />;
};
