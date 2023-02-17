import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Header } from '../Header/Header';
import { NextWars } from '../NextWars/NextWars';
import { AudioConverter } from '../AudioConverter/AudioConverter';
import { JavaMortgage } from '../JavaMortgage/JavaMortgage';
import { PackageSearch } from '../PackageSearch/PackageSearch';
import { ThreadSearch } from '../ThreadSearch/ThreadSearch';
import { JavaMusic } from '../JavaMusic/JavaMusic';
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
      <NextWars />
      <AudioConverter />
      <JavaMortgage />
      <PackageSearch />
      <ThreadSearch />
      <JavaMusic />
      <Footer />
    </>
  );
};
