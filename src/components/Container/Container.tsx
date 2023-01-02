import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Header } from '../Header/Header';
import { NextStreaming } from '../NextStreaming/NextStreaming';
import { NextWars } from '../NextWars/NextWars';
import { AudioConverter } from '../AudioConverter/AudioConverter';
import { PackageSearch } from '../PackageSearch/PackageSearch';
import { ThreadSearch } from '../ThreadSearch/ThreadSearch';
import { JavaMusic } from '../JavaMusic/JavaMusic';
import { NextNews } from '../NextNews/NextNews';
import { PyBook } from '../PyBook/PyBook';
import { CodingChallenge } from '../CodingChallenge/CodingChallenge';
import { ReactMessage } from '../ReactMessage/ReactMessage';
import { JavaMortgage } from '../JavaMortgage/JavaMortgage';
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
        APPLICATIONS
      </h2>
      <NextStreaming />
      <NextWars />
      <AudioConverter />
      <PackageSearch />
      <ThreadSearch />
      <JavaMusic />
      <NextNews />
      <PyBook />
      <CodingChallenge />
      <ReactMessage />
      <JavaMortgage />
      <Footer />
    </>
  );
};
