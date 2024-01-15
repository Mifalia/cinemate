import React from 'react';
import { Link } from 'react-router-dom';
import MediaMiniature from '../MediaMiniature/MediaMiniature';

function MediaList({ mediaList = [] }) {
  return (
    <div className='grid grid-cols-5 gap-6'>
      {mediaList.map((media, index) => (
        <Link to='' key={index}>
          <MediaMiniature
            thumbnail={media.poster_path}
            title={media.original_name}
            year={new Date(media.first_air_date).getFullYear()}
          />
        </Link>
      ))}
    </div>
  );
}

export default MediaList;
