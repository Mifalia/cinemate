import React, { useEffect } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function HeaderFooterLayout({ children }) {
  return (
    <div className='flex flex-col text-primary-text'>
      <Header />
      <div className='min-h-[calc(100vh-72px)]'>{children}</div>
      <Footer />
    </div>
  );
}

export default HeaderFooterLayout;
