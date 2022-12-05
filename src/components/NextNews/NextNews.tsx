import React, { FC } from 'react';
import { ApplicationContainer } from '../ApplicationContainer/ApplicationContainer';

const nextNewsLarge = require('../../assets/images/next-news-large.webp');
const nextNewsMedium = require('../../assets/images/next-news-medium.webp');

export const NextNews: FC = () => {
  const nextNewsProps = {
    title: 'Next News',
    text: `Next News is a Next.js and TypeScript version of Hacker News. State management is handled using the Context API. Login functionality uses Firebase Authentication. Components are built with Material UI. Styling is handled via Tailwind CSS.`,
    liveAnchorHref: 'https://next-news-v1.vercel.app/new/1',
    sourceAnchorHref: 'https://github.com/xiraynedev/next-news/tree/main',
    imageFull: nextNewsLarge,
    imageMedium: nextNewsMedium,
  };

  return <ApplicationContainer applicationProps={nextNewsProps} />;
};
