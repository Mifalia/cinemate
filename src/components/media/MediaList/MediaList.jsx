import React from 'react';
import { Link } from 'react-router-dom';
import MediaMiniature from '../MediaMiniature/MediaMiniature';
import defaultThumbnail from 'assets/images/default-media-thumbnail.png';
import { POSTER_IMG_BASE_URL } from 'config';

function MediaList({ mediaList = [] }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 xl:gap-6'>
      {mediaList.map((media, index) => (
        <Link to={`/details/${media.id}`} key={index}>
          <MediaMiniature
            thumbnail={media.poster_path ? `${POSTER_IMG_BASE_URL}${media.poster_path}` : defaultThumbnail}
            title={media.name}
            year={media.first_air_date && new Date(media.first_air_date).getFullYear()}
          />
        </Link>
      ))}
    </div>
  );
}

export default MediaList;
