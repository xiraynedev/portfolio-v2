import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export const Header: React.FC = () => {
  useLayoutEffect(() => {
    gsap.to('#top', { opacity: 1, duration: 3 });
  });

  return (
    <header
      id='top'
      className='opacity-0 text-white mx-auto bg-gradient-to-r from-yellow-500 to-blue-500 py-20'
    >
      <section className='lg:max-w-screen-lg mx-auto'>
        <h1 className='text-center text-6xl font-bold p-4 mb-5'>
          RAYMOND CORTES
        </h1>
        <article>
          <p className='w-9/12 text-3xl leading-normal my-8 mx-auto py-12'>
            Spent the last three years working with JavaScript and related
            libraries and frameworks. Have also worked with Python, Django, and
            SQL to build full-stack Web applications. Mostly work with Node.js,
            Next.js, and TypeScript to build microservices packaged with Docker
            and hosted on Microsoft Azure.
          </p>
          <a
            href='https://github.com/xiraynedev'
            className='block w-9/12 my-8 p-4 text-3xl mx-auto text-center border'
          >
            View GitHub Profile
          </a>
          <Link
            to='/resume'
            className='block w-9/12 p-4 text-3xl mx-auto text-center border transition ease-in duration-300'
          >
            View Resume
          </Link>
        </article>
      </section>
    </header>
  );
};
