import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component imports
import HomePage from 'pages/home/HomePage';
import SearchPage from 'pages/search/SearchPage';
import DiscoverPage from 'pages/discover/DiscoverPage';
import AboutPage from 'pages/about/AboutPage';

// assets import
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<HomePage />} />
        <Route path={`/search`} element={<SearchPage />} />
        <Route path={`/discover`} element={<DiscoverPage />} />
        <Route path={`/about`} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
