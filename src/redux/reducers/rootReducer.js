import { combineReducers } from "@reduxjs/toolkit";
import { ProductReducer } from "./product.reducer";

const rootReducer =  combineReducers({
    product: ProductReducer
})

export default rootReducer;