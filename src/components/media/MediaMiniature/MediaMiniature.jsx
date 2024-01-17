import React, { useState } from 'react';
import defaultThumbnail from 'assets/images/default-media-thumbnail.png';
import MediaMiniatureSkeleton from 'components/skeletons/MediaMiniatureSkeleton';

function MediaMiniature({ thumbnail = '', title = '', year = '' }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <div
        className={`flex flex-col items-center bg-elevation-1 p-3 pb-4 rounded-2xl cursor-pointer hover:bg-elevation-2 ${
          !isImageLoaded && 'hidden'
        }`}>
        <img
          src={
            thumbnail
              ? `https://image.tmdb.org/t/p/original${thumbnail}`
              : defaultThumbnail
          }
          alt='Poster Thumbnail'
          className='mb-4 rounded w-full'
          onLoad={handleImageLoad}
        />
        <div className={`w-full flex justify-between items-baseline gap-2`}>
          <span
            className={`block flex-1 text-base capitalize font-medium text-ellipsis overflow-hidden whitespace-nowrap`}>
            {title}
          </span>
          {year && (
            <span
              className={`w-fit font-normal text-primary text-xs px-2 py-1 border-2 border-primary`}>
              {year}
            </span>
          )}
        </div>
      </div>
      {!isImageLoaded && <MediaMiniatureSkeleton />}
    </>
  );
}

export default MediaMiniature;
