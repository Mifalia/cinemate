import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

function HomePage() {
  useEffect(() => {
    document.title = 'Welcome To Cinemate';
  }, []);

  return (
    <div className='app-container flex flex-col min-h-screen bg-primary-background text-primary-text'>
      <header className='header-container h-20 bg-elevation-2 fixed top-0 right-0 left-0'>
        <div className='container h-full px-5 mx-auto flex items-center'>
          <div className='header-brand'>CineMate</div>
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
          <h1>Welcome to cinemate</h1>
          <p>Discover the world of movies & TV Shows</p>
        </div>
      </section>
      <footer className='h-min py-6 mt-auto text-center bg-elevation-2'>
        <div className='container mx-auto'>Footer content</div>
      </footer>
    </div>
  );
}

export default HomePage;
