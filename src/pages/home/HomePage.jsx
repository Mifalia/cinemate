import React, { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    document.title = 'Welcome To Cinemate';
  }, []);

  return (
    <div className='app-container'>
      <h1>Welcome to cinemate</h1>
      <p>Discover the world of movies & TV Shows</p>
    </div>
  );
}

export default HomePage;
