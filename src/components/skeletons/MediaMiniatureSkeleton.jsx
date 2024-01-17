import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function MediaMiniatureSkeleton() {
  return (
    <SkeletonTheme baseColor='#303133' highlightColor='#2c2d2e'>
      <div className='bg-elevation-1 p-3 pb-4 rounded-2xl'>
        <Skeleton className='mb-4 rounded xl:h-[319.2px] 2xl:h-[396px]' />
        <div className='w-full flex justify-between gap-2'>
          <Skeleton className='h-6' width={157.5} />
          <Skeleton className='h-6' width={47.3} />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default MediaMiniatureSkeleton;
