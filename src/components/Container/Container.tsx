import React, { useLayoutEffect } from 'react';
import { Header } from '../Header/Header';
import { ReactDesign } from '../ReactDesign/ReactDesign';
import { Footer } from '../Footer/Footer';
import { PackageSearch } from '../PackageSearch/PackageSearch';
import gsap from 'gsap';
import { NextNews } from '../NextNews/NextNews';
import { ReactBasics } from '../ReactBasics/ReactBasics';
import { CodingChallenge } from '../CodingChallenge/CodingChallenge';
import { JavaMusicPlayer } from '../JavaMusicPlayer/JavaMusicPlayer';

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
      <JavaMusicPlayer />
      <CodingChallenge />
      <ReactBasics />
      <PackageSearch />
      <ReactDesign />
      <Footer />
    </>
  );
};
