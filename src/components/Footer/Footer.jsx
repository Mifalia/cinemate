import React from 'react';

function Footer() {
  return (
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
  );
}

export default Footer;
