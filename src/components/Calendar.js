import React from "react";
import Price from "./Price";
import Dates from "./Dates";
import PropTypes from "prop-types";

const Calendar = ({
  price,
  priceCountry,
  rating,
  ratingAmount,
  checkInVisible,
  checkOutVisible,
  toogleCheckIn,
  toogleCheckOut,
  formDate,
  nextMonth,
  previousMonth,
  availableDates,
  pickCheckIn,
  pickCheckOut,
  checkInDate,
  checkOutDate,
  onChangeCheckIn,
  onChangeCheckOut
}) => (
  <div className="container">
    <Price
      price={price}
      priceCountry={priceCountry}
      rating={rating}
      ratingAmount={ratingAmount}
    />
    <Dates
      checkInVisible={checkInVisible}
      checkOutVisible={checkOutVisible}
      toogleCheckIn={toogleCheckIn}
      toogleCheckOut={toogleCheckOut}
      formDate={formDate}
      nextMonth={nextMonth}
      previousMonth={previousMonth}
      availableDates={availableDates}
      pickCheckIn={pickCheckIn}
      pickCheckOut={pickCheckOut}
      checkInDate={checkInDate}
      checkOutDate={checkOutDate}
      onChangeCheckIn={onChangeCheckIn}
      onChangeCheckOut={onChangeCheckOut}
    />
    <button type="submit" className="search">
      Search
    </button>
  </div>
);

Calendar.propTypes = {
  price: PropTypes.number.isRequired,
  priceCountry: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingAmount: PropTypes.number.isRequired,
  checkInVisible: PropTypes.bool.isRequired,
  checkOutVisible: PropTypes.bool.isRequired,
  toogleCheckIn: PropTypes.func.isRequired,
  toogleCheckOut: PropTypes.func.isRequired,
  formDate: PropTypes.object.isRequired,
  nextMonth: PropTypes.func.isRequired,
  previousMonth: PropTypes.func.isRequired,
  availableDates: PropTypes.arrayOf(PropTypes.string),
  pickCheckIn: PropTypes.func.isRequired,
  pickCheckOut: PropTypes.func.isRequired,
  checkInDate: PropTypes.string,
  checkOutDate: PropTypes.string,
  onChangeCheckIn: PropTypes.func.isRequired,
  onChangeCheckOut: PropTypes.func.isRequired
};

Calendar.defaultProps = {
  availableDates: [],
  checkInDate: "",
  checkOutDate: ""
};

export default Calendar;
