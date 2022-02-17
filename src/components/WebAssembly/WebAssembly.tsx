import React from 'react';

const webAssemblyFull = require('../../assets/web-assembly-full.webp');
const webAssemblyMedium = require('../../assets/web-assembly-medium.webp');

export const WebAssembly: React.FC = () => {
  return (
    <section className='flex flex-col mb-20 mx-auto w-9/12 lg:flex-row lg:max-w-screen-lg'>
      <article className='my-8 md:mr-20'>
        <h3 className='font-bold text-5xl mb-5'>WebAssembly Demo</h3>
        <p className='leading-normal text-3xl my-4 lg:my-8'>
          This project utilizes WebAssembly by running raw binary modules compiled directly from C. The code is compiled
          using Emscripten. Native JavaScript APIs are used to load and run the WebAssembly modules.
        </p>
        <div className='flex items-center mt-8'>
          <a href='https://wasmjs.netlify.app/'
             className='border w-48 p-4 shadow text-blue-900 font-bold text-3xl mr-8'>See Live</a>
          <a href='https://github.com/xiraynedev/wasm-demo'
             className='border w-52 p-4 shadow text-blue-900 font-bold text-3xl'>Source Code</a>
        </div>
      </article>
      <article className='my-8 shrink-0 w-11/12 md:w-7/12 shadow border-0'>
        <div className='w-11/12'>
          <a href='https://wasmjs.netlify.app/'>
            <picture className='w-11/12'>
              <source srcSet={webAssemblyFull} media='(min-width:800px)'/>
              <img src={webAssemblyMedium} alt='WebAssembly demo project.'/>
            </picture>
          </a>
        </div>
      </article>
    </section>
  );
};