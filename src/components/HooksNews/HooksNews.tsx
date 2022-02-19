import React from 'react';

const hooksNewsFull = require('../../assets/hooks-news-full.webp');
const hooksNewsMedium = require('../../assets/hooks-news-medium.webp');

export const HooksNews: React.FC = () => {
  return (
    <section className='flex flex-col mx-auto mb-20 w-9/12 lg:flex-row lg:mt-12 lg:max-w-screen-lg'>
      <article className='my-8 md:mr-20'>
        <h3 className='font-bold text-5xl mb-5'>Hooks News</h3>
        <p className='leading-normal text-3xl lg:my-8'>This project uses React Hooks, Firebase, and the Firestore to
          create a clone of
          Hacker News. The app utilizes
          custom React Hooks. State is managed with the Context API. Login/create user functionality is included with
          Firebase Authentication. Pagination works with Firebase Functions. The app is hosted with Firebase Hosting.
        </p>
        <a href='https://hooks-news-392be.web.app/new/1'
           className='mt-8 block border w-48 p-4 shadow text-blue-900 font-bold text-3xl'>See Live</a>
      </article>
      <article className='my-8 shrink-0 w-full md:w-7/12 shadow border-0'>
        <div>
          <a href='https://hooks-news-392be.web.app/new/1'>
            <picture>
              <source srcSet={hooksNewsFull} media='(min-width:800px)'/>
              <img src={hooksNewsMedium} alt='Hooks News project.'/>
            </picture>
          </a>
        </div>
      </article>
    </section>
  );
};