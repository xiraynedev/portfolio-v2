import React, { FC } from "react";
import { SectionComponent } from "./SectionComponent";

export const Experience: FC = () => {
  const experience = {
    title: "Experience",
    description:
      "Experienced with the software development life cycle from requirements gathering to planning, designing, programming, testing, and deployment. Utilize GitHub Actions for the CI/CD pipeline. Currently work to build microservices with Next.js, TypeScript, Node.js, Docker, MongoDB, and Microsoft Azure.",
  };

  return <SectionComponent {...experience} />;
};
