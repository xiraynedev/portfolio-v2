import React, { FC } from 'react';
import { SectionContainer } from './SectionContainer';

export const Experience: FC = () => {
  const firstParagraph = `Three years experience with JavaScript and related libraries and frameworks. Currently working on building a video
 streaming microservices application called Next Streaming that uses Next.js and TypeScript to pull video metadata from
 MongoDB and send direct messages to the video storage microservice to stream videos back to the client from Microsoft
 Azure. Terraform will be used to provision cloud infrastructure on any of the major cloud vendors. RabbitMQ will be used
 to send indirect messages between the Docker containers.`;

  const secondParagraph = `A second completed application is called Next News. It is a Next.js and TypeScript version of Hacker News that uses MUI
  components to build the UI, the Context API to keep track of state, Firebase Authentication for login/logout functionality,
  search functionality to find posts, sorting to show new or top posts, and pagination to show five posts at a time. Studying
  every day to keep up with the latest changes in technology and continually refactoring the applications for better
  performance, code readability, scalability, and avoiding code duplication.`;

  const experience = {
    title: 'Experience',
    firstParagraph,
    secondParagraph,
  };

  return <SectionContainer {...experience} />;
};
