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

  return (
    <HeaderFooterLayout>
      {!MediaStore.isLoading ? (
        MediaStore.current && (
          <div className='pt-24 min-h-[calc(100vh-72px)] text-primary-text'>
            <section className='container mx-auto h-full px-4'>
              {/* padded content */}
              <div className='w-2/3 mt-14 flex flex-col justify-center items-start'>
                {/* Media TITLE */}
                <h2 className='uppercase text-4xl font-bold'>{MediaStore.current.name}</h2>
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
                <h3 className='text-2xl font-bold'>Overview</h3>
                <p className='mt-2'>{MediaStore.current.overview && MediaStore.current.overview}</p>
                {/* button group */}
                <div className='mt-7 w-fit flex gap-5'>
                  <button
                    type='button'
                    className='text-sm rounded-xl border-2 border-primary flex items-center gap-x-2 pl-3 pr-4 py-2.5 text-primary-text bg-transparent font-medium hover:text-primary-background hover:bg-primary'
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
                      className='text-sm rounded-xl border-2 border-primary flex items-center gap-x-2 pl-3 pr-4 py-2.5 text-primary-background hover:text-primary-background bg-primary hover:ring hover:ring-orange-50 hover:border-primary ring-offset-0 font-medium '
                      onClick={() => {}}>
                      <IoIosLink size={16} />
                      View on website
                    </a>
                  )}
                </div>
              </div>
            </section>
          </div>
        )
      ) : (
        // loading skeleton
        <div className='py-4 pt-24 h-[calc(100vh-72px)] text-primary-text'>
          <section className='container mx-auto h-full px-4'>
            {/* padded content */}
            <div className='w-2/3 mt-14 '>
              {/* Media TITLE */}
              {/* <h2 className='uppercase text-4xl font-bold'></h2> */}
              <Skeleton className='h-10' width={300} />
              {/* Media genres */}
              {/* <p className='text-secondary-text text-sm mt-1'>
                <span className='mr-2 italic'></span>
              </p> */}
              <div className='mt-1'>
                <Skeleton className='h-5 mr-2' width={72} count={3} inline />
              </div>

              {/* Media rating and votes */}
              {/* <div className='flex gap-2 items-end text-primary text-base mb-6'>
                <span className='text-sm'></span>
              </div> */}
              <div className='mt-2'>
                <Skeleton className='h-5 mr-2' width={80} count={2} inline />
              </div>
              {/* Media official tagline if exist */}
              <Skeleton className='h-6 mt-6 w-full' width={250} />
              {/* Media overview */}
              {/* <h3 className='text-2xl font-bold'></h3> */}
              <Skeleton className='mt-4 h-8' width={106} />
              {/* <p className='mt-2'></p> */}
              <div className='mt-2'>
                <Skeleton className='h-4' count={3} />
                <Skeleton className='h-4' width={160} />
              </div>
              <div className='mt-7'>
                <Skeleton className='h-10 mr-5' width={120} inline />
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
