import React from "react";
import DateForm from "./DateForm";
import PropTypes from "prop-types";

const Dates = ({
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
  <div className="dates">
    <span className="small_text">Dates</span>
    <div className="date_inputs">
      <input
        className={checkInVisible ? "input_green" : null}
        placeholder="Check In"
        onClick={toogleCheckIn}
        value={checkInDate ? checkInDate : ""}
        onChange={onChangeCheckIn}
      />
      <i className="material-icons">arrow_forward</i>
      <input
        className={checkOutVisible ? "input_green" : null}
        placeholder="Check Out"
        onClick={toogleCheckOut}
        value={checkOutDate ? checkOutDate : ""}
        onChange={onChangeCheckOut}
      />
    </div>
    {checkInVisible ? (
      <div className="check_in_form">
        <DateForm
          formDate={formDate}
          nextMonth={nextMonth}
          previousMonth={previousMonth}
          availableDates={availableDates}
          pickCheckIn={pickCheckIn}
          pickCheckOut={pickCheckOut}
          checkInVisible={checkInVisible}
        />
      </div>
    ) : null}
    {checkOutVisible ? (
      <div className="check_out_form">
        <DateForm
          formDate={formDate}
          nextMonth={nextMonth}
          previousMonth={previousMonth}
          availableDates={availableDates}
          pickCheckIn={pickCheckIn}
          pickCheckOut={pickCheckOut}
          checkInVisible={checkInVisible}
        />
      </div>
    ) : null}
  </div>
);

Dates.propTypes = {
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

Dates.defaultProps = {
  availableDates: [],
  checkInDate: "",
  checkOutDate: ""
};

export default Dates;
