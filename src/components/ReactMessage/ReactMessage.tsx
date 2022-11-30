import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const reactMessageLarge = require('../../assets/images/react-message-large.webp');
const reactMessageMedium = require('../../assets/images/react-message-medium.webp');

export const ReactMessage: FC = () => {
  const reactMessageProps = {
    title: 'React Message',
    text: `React Message was built with React. Messages are sent to a panel, buttons are created dynamically, and color themes are changed between light and dark modes.`,
    liveAnchorHref: 'https://react-message-v1.netlify.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/react-message',
    imageFull: reactMessageLarge,
    imageMedium: reactMessageMedium,
  };

  return <ProjectComponent packageProps={reactMessageProps} />;
};
