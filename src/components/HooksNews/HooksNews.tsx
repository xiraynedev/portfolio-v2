import React, {FC} from 'react';
import {ProjectComponent} from '../ProjectComponent/ProjectComponent';

const hooksNewsFull = require('../../assets/hooks-news-full.webp');
const hooksNewsMedium = require('../../assets/hooks-news-medium.webp');

export const HooksNews: FC = () => {
  const hooksNewsProps = {
    title: 'Hooks News',
    text: `This project uses React Hooks, Firebase, and the Firestore to
          create a clone of Hacker News. The app utilizes custom React Hooks. State is managed with the Context API. 
          Login/create user functionality is included with Firebase Authentication. Pagination works with Firebase 
          Functions. The app is hosted with Firebase Hosting.`,
    liveAnchorHref: 'https://hooks-news-392be.web.app/new/1',
    imageFull: hooksNewsFull,
    imageMedium: hooksNewsMedium,
  };

  return (
    <ProjectComponent packageProps={hooksNewsProps}/>
  );
};