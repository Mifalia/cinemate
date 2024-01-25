import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

function SearchbarSmall({ placeholder = '', value = '', onSubmit = () => {} }) {
  // input value state
  const [input, setInput] = useState(value);

  // handling text change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      onSubmit(input);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='h-10 rounded-lg bg-elevation-3 flex items-center text-secondary-text focus-within:text-primary-text focus-within:ring-1 focus-within:ring-primary-text'>
        <div className='px-3 shrink-0'>
          <RiSearchLine size={18} />
        </div>
        <input
          onChange={handleInputChange}
          defaultValue={value}
          placeholder={placeholder}
          type='text'
          className='text-sm flex-1 h-full bg-transparent appearance-none border-none rounded-none focus:outline-none focus:border-none focus:ring-0'
        />
      </div>
    </form>
  );
}

export default SearchbarSmall;
