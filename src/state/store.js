import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./reducers/index";

const persistConfig = {
	key: "persisted_state_data",
	storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

// const store = createStore(reducer, applyMiddleware(thunk));  //  createStore is deprecated..

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
});
const persistor = persistStore(store);

// To add additional middlewares,
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware1, middleware2, etc...),  //  thunk is inbuilt in @reduxjs/toolkit

export { persistor, store };
