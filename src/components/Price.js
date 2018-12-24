import React from "react";
import Rating from "./Rating";
import PropTypes from "prop-types";

const Price = ({ price, priceCountry, rating, ratingAmount }) => (
  <div className="price">
    <div>
      {price} {priceCountry} <span className="small_text">per night</span>
    </div>
    <Rating rating={rating} ratingAmount={ratingAmount} />
  </div>
);

Price.propTypes = {
  price: PropTypes.number.isRequired,
  priceCountry: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingAmount: PropTypes.number.isRequired
};

export default Price;
