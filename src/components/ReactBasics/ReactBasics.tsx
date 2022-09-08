import React, { FC } from "react";
import { ProjectComponent } from "../ProjectComponent/ProjectComponent";

const reactBasicsLarge = require("../../assets/react-basics-large.webp");
const reactBasicsMedium = require("../../assets/react-basics-medium.webp");

export const ReactBasics: FC = () => {
  const reactBasicsProps = {
    title: "React Basics",
    text: `This project was a code challenge issued by another company. The requirements were to set light/dark themes, display messages, and add buttons dynamically.`,
    liveAnchorHref: "https://react-basics-v1.netlify.app/",
    sourceAnchorHref: "https://github.com/xiraynedev/react-basics",
    imageFull: reactBasicsLarge,
    imageMedium: reactBasicsMedium,
  };

  return <ProjectComponent packageProps={reactBasicsProps} />;
};
