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
    // homepage scroll behavior handling
    var lastScrollTop = 0;
    var viewportHeight = window.innerHeight;
    window.addEventListener('scroll', function () {
      var currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // L'utilisateur fait défiler vers le bas
        if (
          window.scrollY.valueOf() > 72 &&
          window.scrollY.valueOf() < viewportHeight
        ) {
          window.scrollTo({
            top: viewportHeight,
            behavior: 'smooth',
          });
        }
      } else if (currentScrollTop < lastScrollTop) {
        if (window.scrollY.valueOf() < 80) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      }

      // Mettez à jour la position précédente du défilement
      lastScrollTop = currentScrollTop;
    });

    // header appearance and behavior handling
    let header = document.getElementById('app_header');
    window.addEventListener('scroll', () => {
      if (window.scrollY.valueOf() > viewportHeight) {
        header.classList.remove('fixed', 'bg-transparent');
        header.classList.add('sticky', 'bg-elevation-2', 'opacity-90');
      } else {
        header.classList.remove('sticky', 'bg-elevation-2', 'opacity-90');
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
          <p className={`${s['body-link-wrapper']} mb-12 w-fit`}>
            <Link className={`underline text-base leading-loose`}>
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
      <section className='w-full bg-primary-background py-14'>
        <div className='container mx-auto'>
          <h2 className='capitalize  text-center text-3xl font-bold font-sans mb-9'>
            You may like ...
          </h2>
          <div className='grid grid-cols-5 gap-6'>
            <div className='h-40'>hello</div>
          </div>
        </div>
      </section>
      <footer className='h-min py-6 mt-auto text-center bg-elevation-2'>
        <div className='container mx-auto'>
          © Copyright 2023 -{' '}
          <a
            className='text-primary text-sm hover:underline'
            href='https://github.com/Mifalia'
            target='_blank'
            rel='noreferrer'
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
