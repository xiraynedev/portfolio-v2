import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const threadSearchLarge = require('../../assets/images/thread-search-large.webp');
const threadSearchMedium = require('../../assets/images/thread-search-medium.webp');

export const ThreadSearch: FC = () => {
  const threadSearchProps = {
    title: 'Thread Search',
    text: `This project consists of a console app and a WPF app written in C#. Both apps recursively get the sizes of all files in the specified directories by using separate threads. `,
    sourceAnchorHref: 'https://github.com/xiraynedev/thread-search',
    imageFull: threadSearchLarge,
    imageMedium: threadSearchMedium,
  };

  return <ProjectComponent packageProps={threadSearchProps} />;
};
