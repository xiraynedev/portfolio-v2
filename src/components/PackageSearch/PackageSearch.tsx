import React, {FC} from 'react';
const packageSearchFull = require('../../assets/package-search-full.webp');
const packageSearchMedium = require('../../assets/package-search-medium.webp');

export const PackageSearch: FC = () => {
  return (
    <section className='flex flex-col mx-auto mb-20 w-9/12 lg:flex-row lg:mt-12 lg:max-w-screen-lg'>
      <article className='my-8 md:mr-20'>
        <h3 className='font-bold text-5xl mb-5'>Package Search</h3>
        <p className='leading-normal text-3xl lg:my-8'>
          This project uses React with TypeScript and Redux to search the NPM Registry for any package names typed in
          the search field. If packages are found, they are displayed in a list below the form. The project makes use
          of Redux to keep track of state. Styling is handled via Tailwind CSS.
        </p>
        <div className='flex items-center mt-8'>
          <a href='https://package-search.netlify.app/' className='border w-48 p-4 shadow text-blue-900 font-bold text-3xl mr-8'>See Live</a>
          <a href="https://github.com/xiraynedev/package-search" className='border w-52 p-4 shadow text-blue-900 font-bold text-3xl'>Source Code</a>
        </div>
      </article>
      <article className='my-8 shrink-0 w-full md:w-7/12 shadow border-0'>
        <div className='w-full'>
          <a href='https://package-search.netlify.app/'>
            <picture>
              <source srcSet={packageSearchFull} media='(min-width:800px)'/>
              <img src={packageSearchMedium} alt='React package search project.'/>
            </picture>
          </a>
        </div>
      </article>
    </section>

  )
}