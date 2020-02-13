import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { allReducers } from "./reducers/index";
import { Provider } from "react-redux";

const store = createStore(allReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
