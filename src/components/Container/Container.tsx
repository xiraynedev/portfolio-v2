import React from 'react';
import {Header} from '../Header/Header';
import {ReactDesign} from '../ReactDesign/ReactDesign';
import {Footer} from '../Footer/Footer';
import {PackageSearch} from '../PackageSearch/PackageSearch';
import {ReactSocial} from '../ReactSocial/ReactSocial';


export const Container: React.FC = () => {
  return (
    <>
      <Header/>
      <h2 className='text-center mt-20 mb-8 lg:mb-20 text-6xl font-bold'>PROJECTS</h2>
      <PackageSearch/>
      <ReactDesign/>
      <ReactSocial/>
      <Footer/>
    </>
  );
};