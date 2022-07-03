import React, {FC} from 'react';
import {ProjectComponent} from '../ProjectComponent/ProjectComponent';

const nextNewsLarge = require('../../assets/next-news-large.webp');
const nextNewsMedium = require('../../assets/next-news-medium.webp');

export const NextNews: FC = () => {
  const nextNewsProps = {
    title: 'Next News',
    text: `This project is a clone of Hacker News. It is built with TypeScript and Next.js. State management is handled using the Context API. Login functionality uses Firebase Authentication. Components are built with Material UI. Styling is handled via Tailwind CSS.`,
    liveAnchorHref: 'https://next-news-project.vercel.app/new/1',
    sourceAnchorHref: 'https://github.com/xiraynedev/next-news/tree/main',
    imageFull: nextNewsLarge,
    imageMedium: nextNewsMedium,
  };

  return (
    <ProjectComponent packageProps={nextNewsProps}/>
  );
}