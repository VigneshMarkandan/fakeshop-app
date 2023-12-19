import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducers";

export const reducers = combineReducers({
    allproducts : productReducer,
    product : selectedProductReducer,
});