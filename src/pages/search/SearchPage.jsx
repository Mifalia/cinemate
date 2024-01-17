// module imports
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
// services & utils & assets import
import { MediaStore } from 'store/MediaStore';
// components imports
import SearchBar from 'components/SearchBar/SearchBar';
import MediaList from 'components/media/MediaList/MediaList';
import HeaderFooterLayout from 'components/layouts/HeaderFooterLayout';
import MediaListSkeleton from 'components/skeletons/MediaListSkeleton';

function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (q) => {
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get('q');

    if (query) {
      MediaStore.search(query);
      document.title = `Results for "${query}"`;
    } else {
      document.title = 'Search';
    }
  }, [location.search]);

  return (
    <HeaderFooterLayout>
      <div className='container mx-auto py-20 px-4'>
        {/* searchbar wrapper */}
        <div className='w-full my-8 flex justify-center items-center'>
          <div className='w-1/2'>
            <SearchBar
              placeholder='Example : Moon Knight, Better Call Saul, Rick And Morty ...'
              onSubmit={handleSearch}
            />
          </div>
        </div>
        {MediaStore.isLoading && <MediaListSkeleton />}

        {!MediaStore.isLoading && MediaStore.searchResults.length > 0 && (
          <MediaList mediaList={MediaStore.searchResults} />
        )}

        {!MediaStore.isLoading && MediaStore.searchResults.length == 0 && (
          <p className='text-base text-center'>
            {MediaStore.lastSearchQuery
              ? `Sorry, no results found for "${MediaStore.lastSearchQuery}"`
              : 'Find any movie you want'}
          </p>
        )}
      </div>
    </HeaderFooterLayout>
  );
}

export default observer(SearchPage);
