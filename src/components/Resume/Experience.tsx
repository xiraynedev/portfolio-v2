import React, { FC } from "react";
import { SectionComponent } from "./SectionComponent";

export const Experience: FC = () => {
  const experience = {
    title: "Experience",
    description: `Currently working with Python, Django, and SQL to build full-stack Web applications. Have previously worked with
Node.js, Next.js, and TypeScript to build microservices packaged with Docker and hosted on Microsoft Azure.`,
  };

  return <SectionComponent {...experience} />;
};
