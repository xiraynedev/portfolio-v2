import React, {FC} from 'react';
import {ProjectComponent} from '../ProjectComponent/ProjectComponent';

const packageSearchLarge = require('../../assets/package-search-large.webp');
const packageSearchMedium = require('../../assets/package-search-medium.webp');

export const PackageSearch: FC = () => {
  const packageSearchProps = {
    title: 'Package Search',
    text: `This project uses React with TypeScript and Redux to search the NPM Registry for any package names typed in 
    the search field. If packages are found, they are displayed in a list below the form. The project makes use
    of Redux to keep track of state. Styling is handled via Tailwind CSS.`,
    liveAnchorHref: 'https://package-search.netlify.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/package-search',
    imageFull: packageSearchLarge,
    imageMedium: packageSearchMedium,
  };

  return (
    <ProjectComponent packageProps={packageSearchProps}/>
  );
};