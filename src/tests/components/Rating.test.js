import React from "react";
import { shallow } from "enzyme";
import Rating from "../../components/Rating";

it("Rating component renders correctly", () => {
  const rating = 4;
  const ratingAmount = 123;
  const wrapper = shallow(
    <Rating rating={rating} ratingAmount={ratingAmount} />
  );

  expect(wrapper).toMatchSnapshot();
});
