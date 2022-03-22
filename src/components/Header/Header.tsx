import React from 'react';

export const Header: React.FC = () => {
  return (
    <header id='top' className='text-white mx-auto bg-gradient-to-r from-yellow-900 to-yellow-500 py-20'>
      <section className='lg:max-w-screen-lg mx-auto'>
        <h1 className='text-center text-6xl font-bold p-4 mb-5'>RAYMOND CORTES</h1>
        <article>
          <p className='w-9/12 text-3xl leading-normal my-8 mx-auto py-12'>I have worked with technology for many years,
            including HTML, CSS, JavaScript, React, Node, and Express.
            I utilize webpack to build projects from scratch. When required, I use build tools like Parcel and
            frameworks like Next.js to speed up the development workflow. I implement continuous integration and
            deployment with GitHub Actions and unit testing with Jest.
          </p>
          <a href='https://github.com/xiraynedev' className='block w-9/12 my-8 p-4 text-3xl mx-auto text-center border'>View
            GitHub Profile</a>
        </article>
      </section>
    </header>
  );
};