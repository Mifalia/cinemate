import React from 'react';
import MediaMiniatureSkeleton from 'components/skeletons/MediaMiniatureSkeleton';

function MediaListSkeleton({ count = 5 }) {
  const iterations = Array.from({ length: count });

  return (
    <div className='grid grid-cols-5 gap-6'>
      {iterations.map((value, index) => (
        <MediaMiniatureSkeleton key={index} />
      ))}
    </div>
  );
}

export default MediaListSkeleton;
