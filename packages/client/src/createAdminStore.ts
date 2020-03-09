import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { adminReducer, adminSaga } from "react-admin";

export default ({ dataProvider, history }: any) => {
  const reducer = combineReducers({
    admin: adminReducer,
    router: connectRouter(history)
  });

  const saga = function* rootSaga() {
    yield all([adminSaga(dataProvider)].map(fork));
  };
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );
  sagaMiddleware.run(saga);
  return store;
};
