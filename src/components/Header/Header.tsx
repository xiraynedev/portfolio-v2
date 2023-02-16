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
      className='opacity-0 text-white mx-auto bg-gradient-to-r from-gray-500 to-gray-900 py-20'
    >
      <section className='lg:max-w-screen-lg mx-auto'>
        <h1 className='text-center text-6xl font-bold p-4 mb-5'>
          RAYMOND CORTES
        </h1>
        <article>
          <p className='w-9/12 text-3xl leading-relaxed my-8 mx-auto py-12'>
            Several years experience working with JavaScript building complex
            applications that securely store data in cloud databases, provide
            authentication and authorization to users, and increase the
            performance of applications while making them responsive to mobile
            devices. Applications include using Next.js to retrieve REST API
            JSON to display to clients, converting between different audio
            formats in C# with multiple processes, searching the NPM registry
            for packages while keeping track of state with the Redux Toolkit,
            searching a file system for file sizes by using different threads,
            using Python and Django to perform CRUD operations on a SQLite
            database to work with book information, using Java to create a music
            player that randomly selects different songs to play, and having a
            portfolio of applications built entirely from scratch using React,
            TypeScript, Tailwind CSS, GSAP for animations, and webpack.
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
