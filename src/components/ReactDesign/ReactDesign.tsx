import React, {FC} from 'react';
import {ProjectComponent} from '../ProjectComponent/ProjectComponent';

const reactDesignFull = require('../../assets/react-design-full.webp');
const reactDesignMedium = require('../../assets/react-design-medium.webp');

export const ReactDesign: FC = () => {
  const reactDesignProps = {
    title: 'React Design',
    text: `This project turned a Photoshop design file into a React app. Tailwind CSS was used for the styling. Utilized webpack and Babel
          to bundle, transpile, and minify the code. The app is responsive at several breakpoints.`,
    liveAnchorHref: 'https://react-design-app.netlify.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/design-demo',
    imageFull: reactDesignFull,
    imageMedium: reactDesignMedium,
  };

  return (
    <ProjectComponent packageProps={reactDesignProps}/>
  );
};