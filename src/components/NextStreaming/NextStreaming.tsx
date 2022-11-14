import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const nextStreamingLarge = require('../../assets/images/next-streaming-large.webp');
const nextStreamingMedium = require('../../assets/images/next-streaming-medium.webp');

export const NextStreaming: FC = () => {
  const nextStreamingProps = {
    title: 'Next Streaming',
    text: `This project is a Next.js and TypeScript microservices application that works with MongoDB to acquire video metadata. It then sends a direct message to the video storage microservice to retrieve the video from Azure Storage and stream it back to the client.`,
    // liveAnchorHref: 'coming soon...',
    sourceAnchorHref: 'https://github.com/xiraynedev/video-streaming',
    imageFull: nextStreamingLarge,
    imageMedium: nextStreamingMedium,
  };

  return <ProjectComponent packageProps={nextStreamingProps} />;
};
