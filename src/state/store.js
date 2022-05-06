import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers/index";
import thunk from "redux-thunk";

// const store = createStore(reducer, applyMiddleware(thunk));  //  createStore is deprecated..

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// To add additional middlewares,
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware1, middleware2, etc...),  //  thunk is inbuilt in @reduxjs/toolkit

export default store;
