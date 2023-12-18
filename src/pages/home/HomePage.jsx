import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// assets import
import s from './HomePage.module.css';
import app_logo from 'assets/images/cinemate-logo.png';

function HomePage() {
  useEffect(() => {
    document.title = 'Welcome To Cinemate';
  }, []);

  return (
    <div
      className={`${s['main-wrapper']} flex flex-col min-h-screen text-primary-text`}
    >
      <header
        className={`${s['header-wrapper']} h-20 fixed top-0 right-0 left-0 z-10`}
      >
        <div className='container h-full px-5 mx-auto flex items-center'>
          <div className='header-brand'>
            <img src={app_logo} alt='Cinemate Logo' />
          </div>
          <nav className='header-nav ml-auto flex justify-end gap-x-6 uppercase font-medium'>
            <Link to='/'>Home</Link>
            <Link to='/'>Search</Link>
            <Link to='/'>Discover</Link>
            <Link to='/'>About</Link>
          </nav>
        </div>
      </header>
      <section
        className={`${s['hero']} container mx-auto px-5 min-h-screen py-24 flex flex-col justify-center`}
      >
        <div className='w-1/2'>
          <h1 className='section-title text-3xl font-bold mb-2'>
            Welcome to <span className='text-primary'>Cinemate</span>
          </h1>
          <p className='section-description text-6xl font-bold mb-6 capitalize'>
            explore the world of TV Shows & more
          </p>
          <p className='mb-12'>
            <Link className='underline text-base'>Learn more about us</Link>
          </p>
          <button className='rounded-xl border-2 border-primary px-8 py-4 text-primary-text bg-transparent font-bold hover:text-primary-background hover:bg-primary'>
            Start exploring
          </button>
        </div>
      </section>
      <footer className='h-min py-6 mt-auto text-center bg-elevation-2'>
        <div className='container mx-auto'>Footer content</div>
      </footer>
    </div>
  );
}

export default HomePage;
