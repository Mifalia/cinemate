import React from 'react';
import Skeleton from 'react-loading-skeleton';

function MediaMiniatureSkeleton() {
  return (
    <div className='bg-elevation-1 p-3 pb-4 rounded-2xl'>
      <Skeleton className='mb-4 rounded h-[240px] sm:h-[252px] md:h-[217.5px] lg:h-[237.6px] xl:h-[319.2px] 2xl:h-[396px]' />
      <div className='w-full'>
        <Skeleton className='h-6' style={{ width: '65%' }} inline />
        {/* <Skeleton className='h-6' style={{ width: '25%' }} inline /> */}
      </div>
    </div>
  );
}

export default MediaMiniatureSkeleton;
