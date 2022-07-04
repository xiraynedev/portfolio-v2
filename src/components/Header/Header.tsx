import React, {useLayoutEffect} from 'react';
import gsap from 'gsap';
export const Header: React.FC = () => {

  useLayoutEffect(() => {
    gsap.to('#top', {duration: 1.5, y: 0, ease: 'Bounce.easeOut'})
  })

  return (
    <header id='top' className='-translate-y-full text-white mx-auto bg-gradient-to-r from-yellow-900 to-yellow-500 py-20'>
      <section className='lg:max-w-screen-lg mx-auto'>
        <h1 className='text-center text-6xl font-bold p-4 mb-5'>RAYMOND CORTES</h1>
        <article>
          <p className='w-9/12 text-3xl leading-normal my-8 mx-auto py-12'>I have worked with technology for many years. This portfolio contains work that began from scratch. As obstacles were encountered with code duplication and other problems, the portfolio has been refactored using several technologies that include HTML, CSS, JavaScript, React, Node, TypeScript, webpack, and more. The portfolio is updated as new projects are undertaken.
          </p>
          <a href='https://github.com/xiraynedev' className='block w-9/12 my-8 p-4 text-3xl mx-auto text-center border'>View
            GitHub Profile</a>
        </article>
      </section>
    </header>
  );
};