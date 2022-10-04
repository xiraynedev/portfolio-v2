import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const pybookLarge = require('../../assets/images/pybook-large.webp');
const pybookMedium = require('../../assets/images/pybook-medium.webp');

export const PyBook: FC = () => {
  const pybookProps = {
    title: 'PyBook',
    text: `This project is built with Python and Django to perform CRUD operations on a SQLite database to retrieve book information and display it in templates.`,
    sourceAnchorHref: 'https://github.com/xiraynedev/pybook',
    imageFull: pybookLarge,
    imageMedium: pybookMedium,
  };

  return <ProjectComponent packageProps={pybookProps} />;
};
