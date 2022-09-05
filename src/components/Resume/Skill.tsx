import React, { FC } from "react";
import { SectionComponent } from "./SectionComponent";

export const Skill: FC = () => {
  const skills = {
    title: "Skills",
    description: `Python, Django, TypeScript, JavaScript, Node.js, Express.js, React.js, Next.js, Git, GitHub, webpack, HTML, CSS, SCSS, Tailwind CSS, Linux, Docker, MongoDB, Google Cloud Platform, Amazon Web Services, Microsoft Azure, SQL`,
  };

  return <SectionComponent {...skills} />;
};
