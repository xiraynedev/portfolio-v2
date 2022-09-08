import React, { FC } from "react";
import { SectionComponent } from "./SectionComponent";

export const Experience: FC = () => {
  const experience = {
    title: "Experience",
    description: `Spent the last three years working with JavaScript and related libraries and frameworks. Have also worked with Python, Django, and SQL to build full-stack Web applications. Mostly work with Node.js, Next.js, and TypeScript to build microservices packaged with Docker and hosted on Microsoft Azure.`,
  };

  return <SectionComponent {...experience} />;
};
