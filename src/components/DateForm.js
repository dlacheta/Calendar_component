import React from "react";
import tableGenerate from "../func/table";
import PropTypes from "prop-types";

const DateForm = ({
  formDate,
  nextMonth,
  previousMonth,
  availableDates,
  pickCheckIn,
  pickCheckOut,
  checkInVisible
}) => {
  const monthNamesArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const formMonth = formDate.getMonth();
  const formYear = formDate.getFullYear();
  return (
    <div className="date_form">
      <div className="month">
        <button onClick={previousMonth}>
          <i className="material-icons">arrow_backwards</i>
        </button>
        <span className="month_name">
          {monthNamesArray[formMonth]} {formYear}
        </span>
        <button onClick={nextMonth}>
          <i className="material-icons">arrow_forward</i>
        </button>
      </div>
      <div className="month_layout">
        <table>
          <thead>
            <tr>
              <th>Su</th>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
            </tr>
          </thead>
          <tbody>
            {tableGenerate(
              formMonth,
              formYear,
              availableDates,
              checkInVisible,
              pickCheckIn,
              pickCheckOut
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

DateForm.propTypes = {
  formDate: PropTypes.object.isRequired,
  nextMonth: PropTypes.func.isRequired,
  previousMonth: PropTypes.func.isRequired,
  availableDates: PropTypes.arrayOf(PropTypes.string),
  pickCheckIn: PropTypes.func.isRequired,
  pickCheckOut: PropTypes.func.isRequired,
  checkInVisible: PropTypes.bool.isRequired
};

DateForm.defaultProps = {
  availableDates: []
};

export default DateForm;
