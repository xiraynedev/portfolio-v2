import React from 'react';
const reactDesignFull = require('../../assets/react-design-full.webp');
const reactDesignMedium = require('../../assets/react-design-medium.webp');

export const ReactDesign: React.FC = () => {
  return (
    <section className='flex flex-col mx-auto mb-20 w-9/12 lg:flex-row lg:mt-12 lg:max-w-screen-lg'>
      <article className='my-8 md:mr-20'>
        <h3 className='font-bold text-5xl mb-5'>React Design</h3>
        <p className='leading-normal text-3xl lg:my-8'>
          This project turned a Photoshop design file into a React app. Tailwind CSS was used for the styling. Utilized webpack and Babel
          to bundle, transpile, and minify the code. The app is responsive at several breakpoints.
        </p>
        <div className='flex items-center mt-8'>
          <a href='https://react-design-app.netlify.app/' className='border w-48 p-4 shadow text-blue-900 font-bold text-3xl mr-8'>See Live</a>
          <a href="https://github.com/xiraynedev/design-demo" className='border w-52 p-4 shadow text-blue-900 font-bold text-3xl'>Source Code</a>
        </div>
      </article>
      <article className='my-8 shrink-0 w-full md:w-7/12 shadow border-0'>
        <div className='w-full'>
          <a href='https://react-design-app.netlify.app/'>
            <picture>
              <source srcSet={reactDesignFull} media='(min-width:800px)'/>
              <img src={reactDesignMedium} alt='React design project.'/>
            </picture>
          </a>
        </div>
      </article>
    </section>
  )
}