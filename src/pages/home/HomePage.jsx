import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import { IoMdArrowForward } from 'react-icons/io';
// assets import
import s from './HomePage.module.css';
// component imports
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

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
      lastScrollTop = currentScrollTop; // Mettez à jour la position précédente du défilement
    });
  }, []);

  return (
    <div
      className={`${s['main-wrapper']} flex flex-col min-h-screen text-primary-text`}
    >
      <Header />
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
            {/* component */}
            <div className='flex flex-col items-center bg-elevation-1 p-3 pb-4 rounded-2xl cursor-pointer hover:bg-elevation-2'>
              <img
                src='https://image.tmdb.org/t/p/original/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg'
                alt='poster'
                className='mb-4 rounded w-full'
              />
              <div
                className={`${s['details-text-box']} w-full flex justify-between items-baseline gap-2`}
              >
                <span className='flex-1 text-base capitalize font-medium block text-ellipsis overflow-hidden whitespace-nowrap'>
                  Title of the show very very long beeeee
                </span>
                <span className='w-fit font-normal text-primary text-xs px-2 py-1 border-2 border-primary'>
                  2004
                </span>
              </div>
            </div>
            {/* component */}
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
