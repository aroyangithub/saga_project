import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import root from "./store/root";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./store/saga/saga";

const saga = createSagaMiddleware();
const myStore = createStore(root, applyMiddleware(saga));
console.log(myStore.getState());
saga.run(mySaga);

ReactDom.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("d1")
);
