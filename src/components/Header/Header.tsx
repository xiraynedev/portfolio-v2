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
            Self-taught software development knowledge with experience using numerous tools, libraries, and frameworks. Experience with ASP.NET Core, MVC, Blazor, Razor Pages, and SQL Server 2019 and 2022. Familiar with the software development process while utilizing GitHub Actions for CI/CD. Knowledge of agile frameworks, including Scrum and Kanban. Skilled in refactoring and optimizing code with SOLID design principles.
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
