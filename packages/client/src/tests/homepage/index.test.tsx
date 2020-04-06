import React from "react";
import { shallow } from "enzyme";
import { Homepage } from "pages/homepage";
import { allReducers } from "reducers";
import { createStore } from "redux";

export const storeFactory = (initialState: any) => {
  return createStore(allReducers, initialState);
};

const renderHomepage = () => {
  return shallow(<Homepage />);
};

describe("Homepage component", () => {
  it("Renders self and subcomponents", () => {
    const enzymeWrapper = renderHomepage();
    expect(enzymeWrapper.children()).toHaveLength(12);
  });
});
