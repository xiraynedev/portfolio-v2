import React, { FC } from 'react';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

const wasmDemoLarge = require('../../assets/wasm-demo-large.webp');
const wasmDemoMedium = require('../../assets/wasm-demo-medium.webp');

export const WasmDemo: FC = () => {
  const wasmDemoProps = {
    title: 'Wasm Demo',
    text: `This project utilizes WebAssembly by running raw binary modules compiled directly from C. The code is compiled using Emscripten. Native JavaScript APIs are used to load and run the WebAssembly modules.`,
    liveAnchorHref: 'https://wasmdemo.netlify.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/wasm-demo',
    imageFull: wasmDemoLarge,
    imageMedium: wasmDemoMedium,
  };

  return <ProjectComponent packageProps={wasmDemoProps} />;
};
