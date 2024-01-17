import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component imports
import HomePage from 'pages/home/HomePage';
import SearchPage from 'pages/search/SearchPage';
import DiscoverPage from 'pages/discover/DiscoverPage';

// assets import
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<HomePage />} />
        <Route path={`/search`} element={<SearchPage />} />
        <Route path={`/discover`} element={<DiscoverPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
