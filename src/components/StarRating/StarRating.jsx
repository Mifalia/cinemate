import React from 'react';
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';

function StarRating({ rating = 0, className = '' }) {
  if (rating < 0 || rating > 5) return;

  let starList = [];

  const fullStarCount = Math.floor(rating);
  const hasHalfStar = rating - Math.floor(rating) >= 0.5;
  const voidStarCount = 5 - fullStarCount - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStarCount; i++) starList.push(<TiStarFullOutline />);
  if (hasHalfStar) starList.push(<TiStarHalfOutline />);
  for (let i = 0; i < voidStarCount; i++) starList.push(<TiStarOutline />);

  return <div className={`flex w-fit ${className}`}>{starList}</div>;
}

export default StarRating;
