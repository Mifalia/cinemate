import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

// assets import
import s from './Header.module.css';
import app_logo from 'assets/images/cinemate-logo.png';

function Header() {
  useEffect(() => {
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
    // window.addEventListener('scroll', () => {
    //   if (window.scrollY.valueOf() > viewportHeight) {
    //     header.classList.remove('fixed', 'bg-transparent');
    //     header.classList.add('sticky', 'bg-elevation-2', 'opacity-90');
    //   } else {
    //     header.classList.remove('sticky', 'bg-elevation-2', 'opacity-90');
    //     header.classList.add('fixed', 'bg-transparent');
    //   }
    // });
  }, []);

  return (
    <header
      id='app_header'
      className={`${s['header-wrapper']} bg-gray-50 bg-opacity-10 py-5 fixed top-0 right-0 left-0 z-10`}>
      <div className='container h-full px-5 mx-auto flex items-center'>
        <div className='header-brand'>
          <Link to='/'>
            <img src={app_logo} alt='Cinemate Logo' />
          </Link>
        </div>
        <nav className='header-nav ml-auto flex justify-end gap-x-6 uppercase font-medium text-primary-text'>
          <Link to='/'>Home</Link>
          <Link to='/search'>Search</Link>
          <Link to='/discover'>Discover</Link>
          <Link to='/'>About</Link>|
          <a href='https://github.com/Mifalia/cinemate'>
            <AiFillGithub size={24} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
