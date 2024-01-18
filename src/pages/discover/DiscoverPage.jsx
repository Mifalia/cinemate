import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
// services & utils imports
import { MediaStore } from 'store/MediaStore';
// components imports
import HeaderFooterLayout from 'components/layouts/HeaderFooterLayout';
import MediaListSkeleton from 'components/skeletons/MediaListSkeleton';
import MediaList from 'components/media/MediaList/MediaList';

function DiscoverPage() {
  useEffect(() => {
    document.title = 'Discover';
  }, []);

  return (
    <HeaderFooterLayout>
      <div className='container mx-auto px-4 pt-24 pb-10 text-primary-text'>
        {/* trending */}
        <h2 className='uppercase text-center text-3xl font-bold font-sans mt-6 mb-10'>
          Popular this week
        </h2>
        {MediaStore.isLoading ? (
          <MediaListSkeleton />
        ) : (
          <MediaList mediaList={MediaStore.trending} />
        )}
        {/* popular */}

        <h2 className='uppercase text-center text-3xl font-bold font-sans mt-14 mb-10'>
          All time popular
        </h2>
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
