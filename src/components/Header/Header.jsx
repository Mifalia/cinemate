import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

// assets import
import s from './Header.module.css';
import app_logo from 'assets/images/cinemate-logo.png';

function Header() {
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
          <Link to='/about'>About</Link>|
          <a href='https://github.com/Mifalia/cinemate'>
            <AiFillGithub size={24} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
