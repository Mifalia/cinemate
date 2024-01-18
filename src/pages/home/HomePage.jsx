// module imports
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { RiSearchLine } from 'react-icons/ri';
import { IoMdArrowForward } from 'react-icons/io';
// assets import
import s from './HomePage.module.css';
// component imports
import { MediaStore } from 'store/MediaStore';
import MediaList from 'components/media/MediaList/MediaList';
import HeaderFooterLayout from 'components/layouts/HeaderFooterLayout';
import MediaListSkeleton from 'components/skeletons/MediaListSkeleton';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Welcome To Cinemate';
  }, []);

  return (
    <HeaderFooterLayout>
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
            <button
              className='rounded-xl border-2 border-primary flex items-center gap-x-3 pl-6 pr-8 py-4 text-primary-text bg-transparent font-medium hover:text-primary-background hover:bg-primary'
              onClick={() => navigate('/discover')}>
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
          {MediaStore.isLoading ? (
            <MediaListSkeleton />
          ) : (
            <MediaList mediaList={MediaStore.trending.slice(0, 5)} />
          )}
        </div>
      </section>
    </HeaderFooterLayout>
  );
}

export default observer(HomePage);
