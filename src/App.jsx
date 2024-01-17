import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component imports
import HomePage from 'pages/home/HomePage';
import SearchPage from 'pages/search/SearchPage';

// assets import
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<HomePage />} />
        <Route path={`/search`} element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
