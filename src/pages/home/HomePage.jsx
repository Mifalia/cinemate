import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import { IoMdArrowForward } from 'react-icons/io';
// assets import
import s from './HomePage.module.css';
// component imports
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MediaMiniature from 'components/media/MediaMiniature/MediaMiniature';

function HomePage() {
  useEffect(() => {
    document.title = 'Welcome To Cinemate';
    // homepage scroll behavior handling
    // var lastScrollTop = 0;
    // var viewportHeight = window.innerHeight;
    // window.addEventListener('scroll', function () {
    //   var currentScrollTop =
    //     window.scrollY || document.documentElement.scrollTop;

    //   if (currentScrollTop > lastScrollTop) {
    //     // L'utilisateur fait défiler vers le bas
    //     if (
    //       window.scrollY.valueOf() > 72 &&
    //       window.scrollY.valueOf() < viewportHeight
    //     ) {
    //       window.scrollTo({
    //         top: viewportHeight,
    //         behavior: 'smooth',
    //       });
    //     }
    //   } else if (currentScrollTop < lastScrollTop) {
    //     if (window.scrollY.valueOf() < 80) {
    //       window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //       });
    //     }
    //   }
    //   lastScrollTop = currentScrollTop; // Mettez à jour la position précédente du défilement
    // });
  }, []);

  return (
    <>
      <div className={`flex flex-col text-primary-text`}>
        <Header />
        <div className={`${s['main-wrapper']}`}>
          <section
            className={`${s['hero']} container mx-auto px-5 h-[calc(100vh-48px)] py-24 flex flex-col justify-center`}>
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
        </div>

        <section className='w-full bg-primary-background py-14'>
          <div className='container mx-auto'>
            <h2 className='capitalize  text-center text-3xl font-bold font-sans mb-9'>
              You may like ...
            </h2>
            <div className='grid grid-cols-5 gap-6'>
              {/* component */}
              <MediaMiniature
                thumbnail='eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg'
                title='The mandalorian with very long title'
                year='2021'
              />
              {/* component */}
            </div>
          </div>
        </section>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
