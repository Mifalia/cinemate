import React, { useEffect } from 'react';
import HeaderFooterLayout from 'components/layouts/HeaderFooterLayout';
import SearchBar from 'components/SearchBar/SearchBar';
import { MediaStore } from 'store/MediaStore';
import MediaList from 'components/media/MediaList/MediaList';
import { observer } from 'mobx-react';
import { useLocation, useNavigate } from 'react-router-dom';

function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (q) => {
    let query = encodeURI(q);
    navigate(`/search?q=${query}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get('q');

    if (query) {
      MediaStore.search(query);
    }
  }, [location.search]);

  return (
    <HeaderFooterLayout>
      <div className='container mx-auto py-20'>
        {/* searchbar wrapper */}
        <div className='w-full my-8 flex justify-center items-center'>
          <div className='w-1/2'>
            <SearchBar
              placeholder='Example : Moon Knight, Better Call Saul, Rick And Morty ...'
              onSubmit={handleSearch}
            />
          </div>
        </div>
        {/*  */}
        <div>
          <MediaList mediaList={MediaStore.searchResults} />
        </div>
      </div>
    </HeaderFooterLayout>
  );
}

export default observer(SearchPage);
