import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const reactDesignLarge = require('../../assets/images/react-design-large.webp');
const reactDesignMedium = require('../../assets/images/react-design-medium.webp');

export const ReactDesign: FC = () => {
  const reactDesignProps = {
    title: 'React Design',
    text: `A Photoshop design file was turned into a React application. SCSS was used for the styling. Utilized
    webpack and Babel to bundle, transpile, and minify the code. The application is responsive at several breakpoints.`,
    liveAnchorHref: 'https://react-design-app.netlify.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/design-demo',
    imageFull: reactDesignLarge,
    imageMedium: reactDesignMedium,
  };

  return <ProjectComponent packageProps={reactDesignProps} />;
};
