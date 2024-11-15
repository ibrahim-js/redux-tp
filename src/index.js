import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

import userReducer from "./reducers/user-reducer";
import postReducer from "./reducers/post-reducer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
