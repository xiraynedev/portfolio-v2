import React from 'react';
import ReactDOM from 'react-dom/client';
import {Container} from './components/Container/Container';
import './global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(<Container />);