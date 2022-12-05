import React, { FC } from 'react';
import { ApplicationContainer } from '../ApplicationContainer/ApplicationContainer';

const wasmDemoLarge = require('../../assets/images/wasm-demo-large.webp');
const wasmDemoMedium = require('../../assets/images/wasm-demo-medium.webp');

export const WasmDemo: FC = () => {
  const wasmDemoProps = {
    title: 'Wasm Demo',
    text: `Wasm Demo utilizes WebAssembly by running raw binary modules compiled directly from C. The code is compiled using Emscripten. Native JavaScript APIs are used to load and run the WebAssembly modules.`,
    liveAnchorHref: 'https://wasmdemo.netlify.app/',
    sourceAnchorHref: 'https://github.com/xiraynedev/wasm-demo',
    imageFull: wasmDemoLarge,
    imageMedium: wasmDemoMedium,
  };

  return <ApplicationContainer applicationProps={wasmDemoProps} />;
};
