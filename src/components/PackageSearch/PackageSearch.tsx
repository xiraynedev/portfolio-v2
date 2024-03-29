import React, { FC } from 'react';
import { ApplicationContainer } from '../ApplicationContainer/ApplicationContainer';

const packageSearchLarge = require('../../assets/images/package-search-large.webp');
const packageSearchMedium = require('../../assets/images/package-search-medium.webp');

export const PackageSearch: FC = () => {
  const packageSearchProps = {
    title: 'Package Search',
    text: `Package Search uses React with TypeScript to search the NPM Registry for any package names typed in
    the search field. If packages are found, they are displayed in a list below the form. The application makes use
    of the Redux Toolkit to keep track of state. Styling is handled via Tailwind CSS.`,
    liveAnchorHref: 'https://package-search.netlify.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/package-search',
    imageFull: packageSearchLarge,
    imageMedium: packageSearchMedium,
  };

  return <ApplicationContainer applicationProps={packageSearchProps} />;
};
