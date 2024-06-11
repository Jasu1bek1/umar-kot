import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "./reduser";


const rootReducer = combineReducers({
    reducer
});


export const store = configureStore({
    reducer: rootReducer
})