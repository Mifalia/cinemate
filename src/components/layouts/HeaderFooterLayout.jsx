import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function HeaderFooterLayout({ children }) {
  useEffect(() => {
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
    <div className='flex flex-col text-primary-text'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default HeaderFooterLayout;
