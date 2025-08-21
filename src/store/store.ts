import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import loginReducer from "./reducer/loginReducer";
import userReducer from "./reducer/userReducer";
import userSaga from "./saga/userSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        login: loginReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
