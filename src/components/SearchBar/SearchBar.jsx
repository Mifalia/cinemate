import React from 'react';

import { FiSearch } from 'react-icons/fi';

function SearchBar() {
  return (
    <div className='w-full flex justify-between border border-gray-400 rounded-lg p-1.5 focus-within:ring focus-within:ring-orange-50 focus-within:border-primary ring-offset-1'>
      <input
        placeholder=''
        className='flex-1 h-12 px-4 appearance-none bg-transparent border-none rounded-none focus:outline-none focus:border-none focus:ring-0 focus:placeholder-transparent dark:text-white'
      />
      <button className='text-base rounded-lg bg-primary-50 hover:bg-primary-500 flex justify-center items-center w-12 h-12 bg-orange-50 text-primary-background hover:bg-orange-100 active:bg-orange-200'>
        <FiSearch color={(color) => color} size={20} />
      </button>
    </div>
  );
}

export default SearchBar;
