import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

import Home from "./pages/home";
import Login from "./pages/login";
import userReducer from "./reducers/user-reducer";
import postReducer from "./reducers/post-reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </Provider>
);
