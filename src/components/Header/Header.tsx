import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

export const Header: React.FC = () => {
  useLayoutEffect(() => {
    gsap.to('#top', { opacity: 1, duration: 3 });
  });

  return (
    <header
      id='top'
      className='opacity-0 text-white mx-auto bg-gradient-to-r from-gray-500 to-gray-900 py-20'
    >
      <section className='lg:max-w-screen-lg mx-auto'>
        <h1 className='text-center text-6xl font-bold p-4 mb-5'>
          RAYMOND CORTES
        </h1>
        <article>
          <p className='w-9/12 text-3xl leading-relaxed my-8 mx-auto py-12'>
            Using JavaScript to build full-stack applications with various libraries and frameworks. Persistent and responsible
go-getter looking to collaborate with other developers to create and maintain highly sophisticated and well-performing
applications.
          </p>
          <a
            href='https://github.com/xiraynedev'
            className='block w-9/12 my-8 p-4 text-3xl mx-auto text-center border'
          >
            View GitHub Profile
          </a>
        </article>
      </section>
    </header>
  );
};
