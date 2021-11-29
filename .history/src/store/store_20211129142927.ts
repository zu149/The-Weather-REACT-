import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import currentWeatherSliceReducer from './slices/currentWeatherSlice'

const rootReducer = combineReducers( {
    currentWeatherSliceReducer,
});

export const store = configureStore( {
    reducer: rootReducer,
    middleware:
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];