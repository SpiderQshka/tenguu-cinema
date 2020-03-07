import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { adminReducer, adminSaga, USER_LOGOUT } from "react-admin";

export default ({ dataProvider, history }: any) => {
  const reducer = combineReducers({
    admin: adminReducer,
    router: connectRouter(history)
  });
  const resettableAppReducer = (state: any, action: any) =>
    reducer(action.type !== USER_LOGOUT ? state : undefined, action);

  const saga = function* rootSaga() {
    yield all([adminSaga(dataProvider)].map(fork));
  };
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = compose;

  const store = createStore(
    resettableAppReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );
  sagaMiddleware.run(saga);
  return store;
};
