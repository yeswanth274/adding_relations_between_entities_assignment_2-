import React from 'react';
import RatingWidget from './RatingWidget';
import PropTypes from 'prop-types';

const ProductCard = ({ product, onRatingSubmit }) => {
  const { id, name, description, image, avgRating } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} width="300" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>⭐ Average Rating: {avgRating.toFixed(1)}</p>
      <RatingWidget productId={id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;