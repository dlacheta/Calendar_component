import React from "react";
import PropTypes from "prop-types";

const Rating = ({ rating, ratingAmount }) => {
  return (
    <div className="rating">
      <i className={rating >= 1 ? "material-icons full" : "material-icons"}>
        star_rate
      </i>
      <i className={rating >= 2 ? "material-icons full" : "material-icons"}>
        star_rate
      </i>
      <i className={rating >= 3 ? "material-icons full" : "material-icons"}>
        star_rate
      </i>
      <i className={rating >= 4 ? "material-icons full" : "material-icons"}>
        star_rate
      </i>
      <i className={rating >= 5 ? "material-icons full" : "material-icons"}>
        star_rate
      </i>
      {ratingAmount}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingAmount: PropTypes.number.isRequired
};

export default Rating;
