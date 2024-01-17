import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';

function SearchBar({
  placeholder = '',
  value = '',
  className = '',
  onSubmit = () => {},
}) {
  // input value state
  const [input, setInput] = useState(value);

  // handling text change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    // alert(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full flex justify-between border border-gray-400 rounded-lg p-1.5 focus-within:ring focus-within:ring-orange-50 focus-within:border-primary ring-offset-1 ${className}`}>
      <input
        defaultValue={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className='flex-1 h-12 px-4 appearance-none bg-transparent border-none rounded-none focus:outline-none focus:border-none focus:ring-0 focus:placeholder-transparent dark:text-white'
      />
      <button
        type='submit'
        className='text-base rounded-lg bg-primary-50 hover:bg-primary-500 flex justify-center items-center w-12 h-12 bg-orange-50 text-primary-background hover:bg-orange-100 active:bg-orange-200'>
        <FiSearch size={20} />
      </button>
    </form>
  );
}

export default SearchBar;
