import React from 'react';
import ReactStars from "react-rating-stars-component";

const StarRating = ({ rating, handleRating, isEditable = false }) => {
  return (
    <ReactStars
      count={5}
      value={rating}
      onChange={handleRating}
      size={24}
      activeColor="#ffd700"
      isHalf={true}
      edit={isEditable}
    />
  );
};

export default StarRating;        