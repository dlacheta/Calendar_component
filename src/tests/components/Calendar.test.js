import React from "react";
import { shallow } from "enzyme";
import Calendar from "../../components/Calendar";

it("Calendar component renders correctly", () => {
  const toogleCheckIn = jest.fn();
  const toogleCheckOut = jest.fn();
  const nextMonth = jest.fn();
  const previousMonth = jest.fn();
  const pickCheckIn = jest.fn();
  const pickCheckOut = jest.fn();
  const onChangeCheckIn = jest.fn();
  const onChangeCheckOut = jest.fn();
  const price = 298;
  const priceCountry = "zł";
  const rating = 4;
  const ratingAmount = 123;
  const checkInVisible = false;
  const checkOutVisible = false;
  const checkInDate = "";
  const checkOutDate = "";
  const formDate = new Date();
  const availableDates = [
    "4/12/2018",
    "5/12/2018",
    "6/12/2018",
    "7/12/2018",
    "8/12/2018",
    "9/12/2018",
    "10/12/2018",
    "11/12/2018",
    "12/12/2018",
    "13/12/2018",
    "14/12/2018",
    "15/12/2018",
    "16/12/2018",
    "17/12/2018",
    "18/12/2018",
    "19/12/2018"
  ];
  const wrapper = shallow(
    <Calendar
      toogleCheckIn={toogleCheckIn}
      toogleCheckOut={toogleCheckOut}
      nextMonth={nextMonth}
      previousMonth={previousMonth}
      pickCheckIn={pickCheckIn}
      pickCheckOut={pickCheckOut}
      onChangeCheckIn={onChangeCheckIn}
      onChangeCheckOut={onChangeCheckOut}
      price={price}
      priceCountry={priceCountry}
      rating={rating}
      ratingAmount={ratingAmount}
      checkInVisible={checkInVisible}
      checkOutVisible={checkOutVisible}
      formDate={formDate}
      availableDates={availableDates}
      checkInDate={checkInDate}
      checkOutDate={checkOutDate}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
