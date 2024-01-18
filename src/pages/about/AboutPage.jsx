import React from 'react';
import { Link } from 'react-router-dom';
// components import
import HeaderFooterLayout from 'components/layouts/HeaderFooterLayout';
import AppLogo from 'assets/images/cinemate-logo.png';
import RepositoryLogo from 'assets/images/github-logo.png';
import ApiLogo from 'assets/images/tmdb-logo.svg';

function AboutPage() {
  return (
    <HeaderFooterLayout>
      <div className='pt-24 pb-12 container mx-auto px-4 text-primary-text text-justify'>
        <h1 className='font-bold text-4xl uppercase text-center my-4'>
          About <span className='text-primary'>Cinemate</span>
        </h1>
        <h2 className='text-left font-bold text-2xl capitalize mt-6 mb-2'>Welcome</h2>
        <p>
          Welcome to Cinemate, your dedicated hub for all things television! <br />
          Navigating the vast world of television content can be both thrilling and overwhelming. That's where Cinemate
          comes in – we're here to simplify the process, providing you with a user-friendly interface and a wealth of
          data at your fingertips. Whether you're on the hunt for details about specific episodes, the cast and crew, or
          simply looking to explore new shows, Cinemate is designed to be your ultimate companion.
          <br />
          Gone are the days of endless searches and fragmented information. With Cinemate, you can dive deep into the
          world of TV shows, uncovering the details that matter most to you. Our commitment is to empower you with
          accurate and up-to-date information, ensuring that your journey through the television landscape is both
          enjoyable and enriching. Join us on this adventure as we redefine how you search for TV show information.{' '}
          <br />
          Cinemate – where every click brings you closer to the heart of your favorite shows. Happy searching!
        </p>
        <h2 className='text-left font-bold text-2xl capitalize mt-6 mb-2'>Our mission</h2>
        <p>
          Our goal is to enhance your TV-watching experience by making it easier for you to find information about your
          favorite shows and discover hidden gems in the vast landscape of television content.
        </p>
        <h2 className='text-left font-bold text-2xl capitalize mt-6 mb-2'>User-flriendly interface</h2>
        <p>
          We understand the importance of simplicity and efficiency. Cinemate boasts a user-friendly interface that
          ensures a smooth and enjoyable browsing experience. Whether you're a seasoned TV aficionado or a casual
          viewer, our app is designed to cater to all levels of expertise.
        </p>
        <h2 className='text-left font-bold text-2xl capitalize mt-6 mb-2'>The MovieDB API Integration</h2>
        <p>
          To bring you the most accurate and up-to-date information, Cinemate seamlessly integrates with The MovieDB
          API. This powerful tool provides us with a wealth of data about TV shows, including details about episodes,
          cast, crew, and more. By leveraging The MovieDB API, Cinemate ensures that you have access to a comprehensive
          and reliable source of information for all your favorite shows. Go to{' '}
          <a
            href='https://developer.themoviedb.org/docs/getting-started'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold underline text-primary'>
            developer.themoviedb.org
          </a>{' '}
          if you want to know more about how to use The MovieDB free API.
        </p>
        <h2 className='text-left font-bold text-2xl capitalize mt-6 mb-2'>Stay Current with Trending Shows</h2>
        <p>
          Stay in the loop with what's hot and trending in the TV world. Cinemate highlights the most popular shows of
          the moment, ensuring you never miss out on the latest buzz-worthy series. From gripping dramas to hilarious
          comedies, we've got you covered.
        </p>
        <h2 className='text-left font-bold text-2xl capitalize mt-6 mb-2'>Get started with CINEMATE</h2>
        <p>
          Stay in the loop with what's hot and trending in the TV world. Cinemate highlights the most popular shows of
          the moment, ensuring you never miss out on the latest buzz-worthy series. From gripping dramas to hilarious
          comedies, we've got you covered.
        </p>
        <div className='mt-12 flex gap-4 justify-center'>
          <Link to='/'>
            <img src={AppLogo} alt='Cinemate logo' />
          </Link>
          <a
            href='https://github.com/Mifalia/cinemate'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-white px-2 rounded-sm'>
            <img src={RepositoryLogo} alt='GitHub logo' className='h-9' />
          </a>
          <a href='https://developer.themoviedb.org/docs/getting-started' target='_blank' rel='noopener noreferrer'>
            <img src={ApiLogo} alt='The MovieDB logo' className='h-9' />
          </a>
        </div>
      </div>
    </HeaderFooterLayout>
  );
}

export default AboutPage;
