import React from "react";
import { mount } from "enzyme";
import { IFilm } from "interfaces/IFilm";
import { IntlProvider } from "react-intl";
import { Footer } from "pages/homepage/components/footer";

export const render = (params?: any) => {
  const props = {
    item: {} as IFilm,
    buyTicket: jest.fn(),
    watchTrailer: jest.fn(),
    ...params,
  };
  const enzymeWrapper = mount(
    <IntlProvider locale="en">
      <Footer {...props} />
    </IntlProvider>
  );
  return { enzymeWrapper, props };
};

describe("Footer", () => {
  it("Renders self and subcomponents", () => {
    let { enzymeWrapper } = render();
    expect(enzymeWrapper.find(".footer").hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(".menuBlock").hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(".addressInfoBlock").hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(".leaveMsgBlock").hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(".footerForm").hostNodes()).toHaveLength(1);
  });
});
