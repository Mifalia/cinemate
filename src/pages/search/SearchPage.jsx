import React from 'react';
import HeaderFooterLayout from 'components/layouts/HeaderFooterLayout';
import SearchBar from 'components/SearchBar/SearchBar';

function SearchPage() {
  return (
    <HeaderFooterLayout>
      <div className='container mx-auto py-20'>
        {/* searchbar wrapper */}
        <div className='w-full my-8 flex justify-center items-center'>
          <div className='w-1/2'>
            <SearchBar />
          </div>
        </div>
        {/*  */}
      </div>
    </HeaderFooterLayout>
  );
}

export default SearchPage;
