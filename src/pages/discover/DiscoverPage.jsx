import React from 'react';
import { observer } from 'mobx-react';
import { MediaStore } from 'store/MediaStore';
import HeaderFooterLayout from 'components/layouts/HeaderFooterLayout';
import MediaListSkeleton from 'components/skeletons/MediaListSkeleton';
import MediaList from 'components/media/MediaList/MediaList';

function DiscoverPage() {
  return (
    <HeaderFooterLayout>
      <div className='container mx-auto px-4 pt-24 pb-10 text-primary-text'>
        {/* trending */}
        <h1 className='capitalize text-left text-4xl font-bold font-sans mt-16 mb-9'>
          Popular TV shows of the week
        </h1>
        {MediaStore.isLoading ? (
          <MediaListSkeleton />
        ) : (
          <MediaList mediaList={MediaStore.trending} />
        )}
        {/* popular */}

        <h1 className='capitalize text-left text-4xl font-bold font-sans mt-16 mb-9'>
          All time popular
        </h1>
        {MediaStore.isLoading ? (
          <MediaListSkeleton />
        ) : (
          <MediaList mediaList={MediaStore.popular} />
        )}
      </div>
    </HeaderFooterLayout>
  );
}

export default observer(DiscoverPage);
