// import ru from "translations/ru.json";
// import en from "translations/en.json";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import reactIntl, { IntlProvider } from "react-intl";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("react-intl", () => {
  const reactIntl = require.requireActual("react-intl");
  const intl = reactIntl.createIntl({
    locale: "en",
  });

  return {
    ...reactIntl,
    useIntl: () => intl,
  };
});

window.matchMedia =
  window.matchMedia ||
  (() => {
    return { matches: false, addListener: () => {}, removeListener: () => {} };
  });
