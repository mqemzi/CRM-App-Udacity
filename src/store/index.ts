import createSagaMiddleware from 'redux-saga';
import {configureStore} from "@reduxjs/toolkit";
import reducer from './reducers'
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
export  const store = configureStore({
        reducer,
        preloadedState:{},
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware)
    });
sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>



