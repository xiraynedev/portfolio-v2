import React, { FC } from 'react';
import { ApplicationContainer } from '../ApplicationContainer/ApplicationContainer';

const audioConverterLarge = require('../../assets/images/audio-converter-large.webp');
const audioConverterMedium = require('../../assets/images/audio-converter-medium.webp');

export const AudioConverter: FC = () => {
  const audioConverterProps = {
    title: 'Audio Converter',
    text: `The Audio Converter was built with C# and recursively retrieves audio files from the specified source directory and converts them between different formats.`,
    sourceAnchorHref: 'https://github.com/xiraynedev/audio-converter',
    imageFull: audioConverterLarge,
    imageMedium: audioConverterMedium,
  };

  return <ApplicationContainer applicationProps={audioConverterProps} />;
};
