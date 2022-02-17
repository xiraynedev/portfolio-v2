import React from 'react';
import {Header} from '../Header/Header';
import {HooksNews} from '../HooksNews/HooksNews';
import {ReactDesign} from '../ReactDesign/ReactDesign';
import {WebAssembly} from '../WebAssembly/WebAssembly';
import {Footer} from '../Footer/Footer';


export const Container: React.FC = () => {
  return (
    <>
      <Header/>
      <h2 className='text-center mt-20 mb-8 lg:mb-20 text-6xl font-bold'>PROJECTS</h2>
      <HooksNews />
      <ReactDesign />
      <WebAssembly />
      <Footer />
    </>
  );
};