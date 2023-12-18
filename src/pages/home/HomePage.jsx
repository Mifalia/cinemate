import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import { IoMdArrowForward } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';

// assets import
import s from './HomePage.module.css';
import app_logo from 'assets/images/cinemate-logo.png';

function HomePage() {
  useEffect(() => {
    document.title = 'Welcome To Cinemate';

    let header = document.getElementById('app_header');

    window.addEventListener('scroll', () => {
      if (window.scrollY.valueOf() > 16) {
        header.classList.remove('fixed', 'bg-transparent');
        header.classList.add('sticky', 'bg-elevation-2');
      } else {
        header.classList.remove('sticky', 'bg-elevation-2');
        header.classList.add('fixed', 'bg-transparent');
      }
    });
  }, []);

  return (
    <div
      className={`${s['main-wrapper']} flex flex-col min-h-screen text-primary-text`}
    >
      <header
        id='app_header'
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
            <Link to='/'>About</Link>|
            <a href='https://github.com/Mifalia/cinemate'>
              <AiFillGithub size={24} />
            </a>
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
            <Link className={`underline text-base`}>
              Learn more about us
              <IoMdArrowForward size={16} className='ml-2 inline-block' />
            </Link>
          </p>
          <button className='rounded-xl border-2 border-primary flex items-center gap-x-3 pl-6 pr-8 py-4 text-primary-text bg-transparent font-medium hover:text-primary-background hover:bg-primary'>
            <RiSearchLine size={18} />
            Start exploring
          </button>
        </div>
      </section>
      <footer className='h-min py-6 mt-auto text-center bg-elevation-2'>
        <div className='container mx-auto'>
          © Copyright 2023 -{' '}
          <a
            className='text-primary text-sm hover:underline'
            href='https://github.com/Mifalia'
          >
            Mifalia Nathanaël
          </a>{' '}
          | All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
