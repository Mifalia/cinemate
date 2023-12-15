import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component imports
import HomePage from './pages/home/HomePage';

// assets import
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
