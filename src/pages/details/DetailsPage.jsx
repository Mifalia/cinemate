import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import Skeleton from 'react-loading-skeleton';
// services and utils import
import { MediaStore } from 'store/MediaStore';
// component imports
import StarRating from 'components/StarRating/StarRating';
import HeaderFooterLayout from 'components/layouts/HeaderFooterLayout';
import { IoMdArrowBack, IoIosLink } from 'react-icons/io';

function DetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    MediaStore.getOne(id);
  }, [id]);

  useEffect(() => {
    document.title = MediaStore.current.name ? MediaStore.current.name : 'Details';
  }, [MediaStore.current]);

  return (
    <HeaderFooterLayout>
      {!MediaStore.isLoading ? (
        MediaStore.current && (
          <>
            <div
              className='pt-12 lg:pt-20 2xl:pt-22 min-h-[calc(100vh-72px)] pb-10 sm:pb-0 lg:pb-10 text-primary-text'
              style={{
                background: MediaStore.current.backdrop_path
                  ? `linear-gradient(to right, #202020, rgba(0, 0, 0, 0.75)), url("https://image.tmdb.org/t/p/original${MediaStore.current.backdrop_path}") no-repeat center / cover`
                  : 'black',
              }}>
              <section className='container mx-auto h-full px-4'>
                {/* padded content */}
                <div className='w-full lg:w-2/3 mt-14'>
                  {/* Media TITLE */}
                  <h2 className='uppercase text-3xl sm:text-4xl font-bold'>{MediaStore.current.name}</h2>
                  {/* Media genres */}
                  <p className='text-secondary-text text-sm mt-1'>
                    {MediaStore.current.genres?.map((genre, index) => (
                      <span key={index} className='mr-2 italic'>
                        #{genre.name}
                      </span>
                    ))}
                  </p>
                  {/* Media rating and votes */}
                  <div className='flex gap-2 items-end text-primary text-base mb-6'>
                    <StarRating rating={MediaStore.current.vote_average && MediaStore.current.vote_average / 2} />
                    <span className='text-sm'>
                      ({MediaStore.current.vote_count && MediaStore.current.vote_count} votes)
                    </span>
                  </div>
                  {/* Media official tagline if exist */}
                  {MediaStore.current.tagline && (
                    <p className='italic text-secondary-text text-base mb-4'> {MediaStore.current.tagline} </p>
                  )}
                  {/* Media overview */}
                  <h3 className='text-xl sm:text-2xl font-bold'>Overview</h3>
                  <p className='mt-2'>{MediaStore.current.overview && MediaStore.current.overview}</p>
                  {/* button group */}
                  <div className='mt-7 w-full sm:w-fit flex gap-2 sm:gap-4'>
                    <button
                      type='button'
                      className='basis-auto shrink-0 text-center sm:basis-auto text-sm rounded-xl border-2 border-primary flex items-center gap-x-2 pl-3 pr-4 py-2.5 text-primary-text bg-transparent font-medium hover:ring hover:ring-orange-50 hover:border-primary ring-offset-0'
                      onClick={() => navigate(-1)}>
                      <IoMdArrowBack size={16} />
                      Go back
                    </button>
                    {MediaStore.current.homepage && (
                      <a
                        href={MediaStore.current.homepage}
                        target='_blank'
                        rel='noopener noreferrer'
                        type='button'
                        className='flex-1 text-center sm:basis-auto text-sm rounded-xl border-2 border-primary flex items-center justify-center gap-x-2 pl-3 pr-4 py-2.5 text-primary-background hover:text-primary-background bg-primary hover:ring hover:ring-orange-50 hover:border-primary ring-offset-0 font-medium'>
                        <IoIosLink size={16} />
                        View on website
                      </a>
                    )}
                  </div>
                </div>

                {/* seasons details */}
                <div className='mt-8'>
                  <h3 className='text-xl sm:text-2xl font-bold'>
                    Has {MediaStore.current.number_of_episodes && MediaStore.current.number_of_episodes} episode(s) for{' '}
                    {MediaStore.current.number_of_seasons && MediaStore.current.number_of_seasons} season(s)
                  </h3>
                  <div className='mt-2'>
                    {/* season list */}
                    <div className='custom-scrollbar flex flex-col sm:flex-row sm:flex-nowrap sm:py-2 gap-3 overflow-x-scroll'>
                      {/* season card details */}
                      {MediaStore.current.seasons &&
                        MediaStore.current.seasons.map((season, index) => {
                          if (!season.season_number == 0) {
                            return (
                              <div
                                key={index}
                                className='p-4 border border-gray-500 rounded w-full sm:w-96 flex-shrink-0 backdrop-blur-sm'>
                                <div className='flex justify-between'>
                                  <span className='text-primary'>{season.name && season.name}</span>
                                  <span className='text-secondary-text text-xs'>
                                    {season.air_date && new Date(season.air_date).getFullYear()}
                                  </span>
                                </div>
                                <p className='text-sm text-justify mt-2'>{season.overview && season.overview}</p>
                              </div>
                            );
                          }
                        })}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        )
      ) : (
        // loading skeleton
        <div className='pt-12 lg:pt-20 2xl:pt-22 h-[calc(100vh-72px)] text-primary-text'>
          <section className='container mx-auto h-full px-4'>
            {/* padded content */}
            <div className='w-full lg:w-2/3 mt-14'>
              {/* Media TITLE */}
              <Skeleton className='h-9 sm:h-10' width={300} />
              {/* Media genres */}
              <div className='mt-1'>
                <Skeleton className='h-5 mr-2' width={72} count={3} inline />
              </div>

              {/* Media rating and votes */}
              <div className='mt-2'>
                <Skeleton className='h-5 mr-2' width={80} count={2} inline />
              </div>
              {/* Media official tagline if exist */}
              <Skeleton className='h-6 mt-6 w-full' width={250} />
              {/* Media overview */}
              <Skeleton className='mt-4 h-7' width={116} />
              <div className='mt-2'>
                <Skeleton className='h-4' count={3} />
                <Skeleton className='h-4' width={160} />
              </div>
              <div className='mt-7'>
                <Skeleton className='h-10 mr-2 sm:mr-5' width={120} inline />
                <Skeleton className='h-10' width={160} inline />
              </div>
            </div>
          </section>
        </div>
      )}
    </HeaderFooterLayout>
  );
}

export default observer(DetailsPage);
