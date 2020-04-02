import React from "react";
import { PageLoader, Loader } from "components/loader";
import { shallow, mount, render } from "enzyme";

describe("Loader component", () => {
  it("Renders well", () => {
    const wrapper = shallow(<PageLoader />);
    console.log(wrapper.props());

    // expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
