import React from 'react';
import MediaMiniatureSkeleton from 'components/skeletons/MediaMiniatureSkeleton';

function MediaListSkeleton({ count = 5 }) {
  const iterations = Array.from({ length: count });

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 xl:gap-6'>
      {iterations.map((value, index) => (
        <MediaMiniatureSkeleton key={index} />
      ))}
    </div>
  );
}

export default MediaListSkeleton;
