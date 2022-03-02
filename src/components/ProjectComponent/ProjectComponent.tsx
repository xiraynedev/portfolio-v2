import React, {FC} from 'react';

interface ProjectProps {
  packageProps: {
    title: string;
    text: string;
    liveAnchorHref: string;
    sourceAnchorHref?: string;
    imageFull: any;
    imageMedium: any;
  };
}

export const ProjectComponent: FC<ProjectProps> = ({packageProps}) => {
  const {title, text, liveAnchorHref, sourceAnchorHref, imageFull, imageMedium} = packageProps;

  return (
    <section className='flex flex-col mx-auto mb-20 w-9/12 lg:flex-row lg:mt-12 lg:max-w-screen-lg'>
      <article className='my-8 md:mr-20'>
        <h3 className='font-bold text-5xl mb-5'>{title}</h3>
        <p className='leading-normal text-3xl lg:my-8'>
          {text}
        </p>
        <div className='flex items-center mt-8'>
          <a href={liveAnchorHref} className='border w-48 p-4 shadow text-blue-900 font-bold text-3xl mr-8'>See Live</a>
          {sourceAnchorHref &&
						<a href={sourceAnchorHref} className='border w-52 p-4 shadow text-blue-900 font-bold text-3xl'>Source
							Code</a>}
        </div>
      </article>
      <article className='my-8 shrink-0 w-full md:w-7/12 shadow border-0'>
        <div className='w-full'>
          <a href={liveAnchorHref}>
            <picture>
              <source srcSet={imageFull} media='(min-width:800px)'/>
              <img src={imageMedium} alt='React package search project.'/>
            </picture>
          </a>
        </div>
      </article>
    </section>
  );
};