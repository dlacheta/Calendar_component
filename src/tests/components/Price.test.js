import React from "react";
import { shallow } from "enzyme";
import Price from "../../components/Price";

it("Price component renders correctly", () => {
  const price = 298;
  const priceCountry = "zł";
  const rating = 4;
  const ratingAmount = 123;
  const wrapper = shallow(
    <Price
      price={price}
      priceCountry={priceCountry}
      rating={rating}
      ratingAmount={ratingAmount}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
