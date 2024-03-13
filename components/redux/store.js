import { configureStore } from "@reduxjs/toolkit";

import routeReducer from "./routeReducer";
import createSagaMiddleware from "@redux-saga/core";
import SagaData from "./saga";

const sagaMiddleware=createSagaMiddleware()


const store=configureStore({
    reducer:routeReducer,
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(SagaData)

export default store