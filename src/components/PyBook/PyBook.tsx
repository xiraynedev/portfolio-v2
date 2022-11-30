import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const pybookLarge = require('../../assets/images/pybook-large.webp');
const pybookMedium = require('../../assets/images/pybook-medium.webp');

export const PyBook: FC = () => {
  const pybookProps = {
    title: 'PyBook',
    text: `PyBook was built with Python and Django to perform CRUD operations on a SQLite database and to retrieve book information to display it in templates.`,
    sourceAnchorHref: 'https://github.com/xiraynedev/pybook',
    imageFull: pybookLarge,
    imageMedium: pybookMedium,
  };

  return <ProjectComponent packageProps={pybookProps} />;
};
