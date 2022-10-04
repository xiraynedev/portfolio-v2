import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Header } from '../Header/Header';
import { NextNews } from '../NextNews/NextNews';
import { PyBook } from '../PyBook/PyBook';
import { JavaMusicPlayer } from '../JavaMusicPlayer/JavaMusicPlayer';
import { CodingChallenge } from '../CodingChallenge/CodingChallenge';
import { ReactBasics } from '../ReactBasics/ReactBasics';
import { PackageSearch } from '../PackageSearch/PackageSearch';
import { WasmDemo } from '../WasmDemo/WasmDemo';
import { ReactDesign } from '../ReactDesign/ReactDesign';
import { Footer } from '../Footer/Footer';

export const Container: React.FC = () => {
  useLayoutEffect(() => {
    gsap.to('#title', {
      x: 0,
      duration: 1.5,
      delay: 0.75,
      ease: 'Bounce.easeOut',
    });
  });

  return (
    <>
      <Header />
      <h2
        id='title'
        className='-translate-x-full text-center mt-20 mb-8 lg:mb-20 text-6xl font-bold'
      >
        PROJECTS
      </h2>
      <NextNews />
      <PyBook />
      <JavaMusicPlayer />
      <CodingChallenge />
      <ReactBasics />
      <PackageSearch />
      <WasmDemo />
      <ReactDesign />
      <Footer />
    </>
  );
};
