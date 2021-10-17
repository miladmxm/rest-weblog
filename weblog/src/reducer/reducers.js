import { combineReducers } from "redux";
import { getBlogReducer } from "../reducer/blog";

export const reducers = combineReducers({
    getBlog:getBlogReducer
})