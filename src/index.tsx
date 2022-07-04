import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { Resume } from './components/Resume/Resume';
import './global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement,
);
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Container />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  </Router>,
);
