import React, { FC } from 'react';
import { ApplicationContainer } from '../ApplicationContainer/ApplicationContainer';

const javaMortgageLarge = require('../../assets/images/java-mortgage-large.webp');
const javaMortgageMedium = require('../../assets/images/java-mortgage-medium.webp');

export const JavaMortgage: FC = () => {
  const javaMortgageProps = {
    title: 'Java Mortgage',
    text: `Java Mortgage is a calculator that prompts users for the principal amount of a loan, the annual interest rate, and the loan period. It then calculates the monthly payments until $0 is due.`,
    sourceAnchorHref: 'https://github.com/xiraynedev/java-mortgage',
    imageFull: javaMortgageLarge,
    imageMedium: javaMortgageMedium,
  };

  return <ApplicationContainer applicationProps={javaMortgageProps} />;
};
