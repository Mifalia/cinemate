import React, { useEffect } from 'react';
import app_logo from 'assets/images/cinemate-logo.png';

import { Link } from 'react-router-dom';

function HomePage() {
  useEffect(() => {
    document.title = 'Welcome To Cinemate';
  }, []);

  return (
    <div className='app-container flex flex-col min-h-screen bg-primary-background text-primary-text'>
      <header className='header-container h-20 bg-elevation-2 fixed top-0 right-0 left-0'>
        <div className='container h-full px-5 mx-auto flex items-center'>
          <div className='header-brand'>
            <img src={app_logo} alt='Cinemate Logo' />
          </div>
          <nav className='header-nav ml-auto flex justify-end gap-x-6'>
            <Link to='/'>Home</Link>
            <Link to='/'>Search</Link>
            <Link to='/'>Discover</Link>
            <Link to='/'>About</Link>
          </nav>
        </div>
      </header>
      <section className='hero container mx-auto px-5 min-h-screen py-24 flex flex-col justify-center'>
        <div>
          <h1 className='section-title'>Welcome to cinemate</h1>
          <p className='section-description'>
            Discover the world of movies & TV Shows
          </p>
        </div>
      </section>
      <footer className='h-min py-6 mt-auto text-center bg-elevation-2'>
        <div className='container mx-auto'>Footer content</div>
      </footer>
    </div>
  );
}

export default HomePage;
