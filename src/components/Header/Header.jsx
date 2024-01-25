import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// icons
import { MdOutlineMenu } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';
import { LuScreenShare } from 'react-icons/lu';
import { MdInfoOutline } from 'react-icons/md';
import { GrShare } from 'react-icons/gr';

// assets import
import app_logo from 'assets/images/cinemate-logo.png';
import { GITHUB_REPOSITORY } from 'config';
import SearchbarSmall from 'components/SearchbarSmall/SearchbarSmall';

function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // toggle menu visibility
  const toggleMenu = () => {
    setShowMenu((current) => !current);
    // document.body.classList.toggle('overflow-y-hidden', !showMenu);
  };

  // handle menu close on escape
  const closeMenuOnEscape = (event) => {
    // Close the menu if Escape key is pressed
    if (event.key === 'Escape' && showMenu) {
      toggleMenu();
    }
  };

  // handle menu close on scroll
  const closeMenuOnScroll = (event) => {
    // Close the menu if user scroll and if the menu is visible
    if (showMenu) {
      toggleMenu();
    }
  };

  // handle closing menu by touching the blury area of the modal
  const handleModalAreaClick = (e) => {
    if (e.target.classList.contains('close-menu')) {
      toggleMenu();
    }
  };

  // method to pass to SearchbarSmall
  const handleMenuSearchbarSubmit = (keyword) => {
    toggleMenu();
    navigate(`/search?q=${keyword}`);
  };

  // hooks
  useEffect(() => {
    window.addEventListener('keydown', closeMenuOnEscape);
    window.addEventListener('scroll', closeMenuOnScroll);
    return () => {
      window.removeEventListener('keydown', closeMenuOnEscape);
      window.removeEventListener('scroll', closeMenuOnScroll);
    };
  }, [showMenu]);

  // rendering
  return (
    <>
      <header
        id='app_header'
        className='bg-gray-50 backdrop-blur-md bg-opacity-10 py-5 fixed top-0 right-0 left-0 z-10'>
        <div className='container h-full px-4 mx-auto flex items-center justify-between'>
          <div className='header-brand shrink-0'>
            <Link to='/'>
              <img src={app_logo} alt='Cinemate Logo' />
            </Link>
          </div>
          <button
            className='cursor-pointer border rounded p-2 border-secondary-text text-secondary-text hover:border-primary-text hover:text-primary-text hover:ring-1 hover:ring-orange-50'
            onClick={toggleMenu}>
            <MdOutlineMenu className='text-xl' />
          </button>
        </div>
      </header>

      {/* menu modal */}
      <div
        className={`close-menu fixed w-screen h-screen left-0 right-0 bottom-0 top-0 overflow-hidden backdrop-blur-[1px] z-[8] bg-gray-50 bg-opacity-5 ${
          !showMenu ? 'hidden' : ''
        }`}
        onClick={handleModalAreaClick}>
        <div className='container mx-auto px-4 close-menu'>
          {/* menu content */}
          <div className='ml-auto w-full md:w-1/2 lg:w-64 mt-24 bg-opacity-20 bg-elevation-2 rounded-xl'>
            <nav className='min-h-[360px] flex flex-col justify-start'>
              <div className='my-4 mx-4'>
                <SearchbarSmall onSubmit={handleMenuSearchbarSubmit} placeholder='Search ...' />
              </div>
              <Link to='/' className='' onClick={toggleMenu}>
                <div className='h-12 pl-4 pr-3 flex items-center bg-transparent hover:bg-elevation-3 text-secondary-text hover:text-primary'>
                  <span className='px-3'>
                    <IoHomeOutline size={18} />
                  </span>
                  <span className='text-sm'>Home</span>
                </div>
              </Link>
              <Link to='/discover' onClick={toggleMenu}>
                <div className='h-12 pl-4 pr-3 flex items-center bg-transparent hover:bg-elevation-3 text-secondary-text hover:text-primary'>
                  <span className='px-3'>
                    <LuScreenShare size={18} />
                  </span>
                  <span className='text-sm'>Explore</span>
                </div>
              </Link>
              <Link to='/about' className='' onClick={toggleMenu}>
                <div className='h-12 pl-4 pr-3 flex items-center bg-transparent hover:bg-elevation-3 text-secondary-text hover:text-primary'>
                  <span className='px-3'>
                    <MdInfoOutline size={18} />
                  </span>
                  <span className='text-sm'>About Us</span>
                </div>
              </Link>
              <a href={GITHUB_REPOSITORY} className='mt-auto'>
                <div className='px-4 text-secondary-text hover:text-primary-text'>
                  <div className='border-t pb-px border-t-gray-500 h-12 flex items-center'>
                    <span className='px-3'>
                      <GrShare size={18} />
                    </span>
                    <span className='text-sm'>View on GitHub</span>
                  </div>
                </div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
