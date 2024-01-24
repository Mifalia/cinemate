// module imports
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { RiSearchLine } from 'react-icons/ri';
import { IoMdArrowForward } from 'react-icons/io';
// assets import
import backgroundImage from 'assets/images/main-bg.png';
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
      <div className='min-h-[calc(100vh-72px)]'>
        <div
          className='h-[calc(100vh-48px)] flex flex-col justify-center mx-auto container px-4'
          style={{
            background: `linear-gradient(to right, #202020, rgba(0, 0, 0, 0.55)),url(${backgroundImage}) no-repeat top center / cover`,
          }}>
          <div className='w-full md:w-5/6 lg:w-3/4 xl:w-1/2'>
            <h1 className='section-title text-2xl sm:text-3xl font-bold font-sans mb-2'>
              Welcome to <span className='text-primary'>Cinemate</span>
            </h1>
            <p className='section-description text-4xl sm:text-6xl font-bold font-sans mb-6 capitalize'>
              explore the world of TV Shows & more
            </p>
            <p className='w-fit py-0 font-sans transition-transform transform hover:translate-x-4'>
              <Link className='underline text-base leading-loose' to='/about'>
                Learn more about us
                <IoMdArrowForward size={16} className='ml-2 inline-block' />
              </Link>
            </p>
            <button
              className='w-full justify-center sm:w-fit sm:justify-start mt-24 sm:mt-12 rounded-xl border-2 border-primary flex items-center gap-x-3 pl-6 pr-8 py-4 text-primary-text bg-transparent font-medium hover:text-primary-background hover:bg-primary'
              onClick={() => navigate('/discover')}>
              <RiSearchLine size={18} />
              Start exploring
            </button>
          </div>
        </div>

        <div className='w-full bg-primary-background py-14'>
          <div className='container mx-auto px-4'>
            <h2 className='capitalize  text-center text-2xl sm:text-3xl font-bold font-sans mb-9'>You may like ...</h2>
            {MediaStore.isLoading ? <MediaListSkeleton /> : <MediaList mediaList={MediaStore.trending.slice(0, 5)} />}
          </div>
        </div>
      </div>
    </HeaderFooterLayout>
  );
}

export default observer(HomePage);
