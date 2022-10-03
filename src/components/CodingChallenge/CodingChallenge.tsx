import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const codingChallengeLarge = require('../../assets/coding-challenge-large.webp');
const codingChallengeMedium = require('../../assets/coding-challenge-medium.webp');

export const CodingChallenge: FC = () => {
  const codingChallengeProps = {
    title: 'Coding Challenge',
    text: `
        This project was a coding challenge issued by another company. The requirements were to use vanilla JavaScript to fetch data from the {JSON} Placeholder API and add the data to HTML tables. The project has since been upgraded to Next.js, TypeScript, and MUI to add server-side rendering of the data.
   `,
    liveAnchorHref: 'https://coding-challenge-v3.netlify.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/coding-challenge-v3',
    imageFull: codingChallengeLarge,
    imageMedium: codingChallengeMedium,
  };

  return <ProjectComponent packageProps={codingChallengeProps} />;
};
