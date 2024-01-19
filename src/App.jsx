import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// component imports
import HomePage from 'pages/home/HomePage';
import SearchPage from 'pages/search/SearchPage';
import DiscoverPage from 'pages/discover/DiscoverPage';
import AboutPage from 'pages/about/AboutPage';
import DetailsPage from 'pages/details/DetailsPage';

// assets import
import './App.css';

function App() {
  return (
    <SkeletonTheme baseColor='#303133' highlightColor='#2c2d2e'>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<HomePage />} />
          <Route path={`/search`} element={<SearchPage />} />
          <Route path={`/discover`} element={<DiscoverPage />} />
          <Route path={`/about`} element={<AboutPage />} />
          <Route path={`/details/:id`} element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
