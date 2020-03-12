import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import IntlProvider from "containers/LangContainer";
import { allReducers } from "./reducers";
import { rootSaga } from "sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
