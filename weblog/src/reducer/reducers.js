import { combineReducers } from "redux";
import { getBlogReducer } from "../reducer/blog";
import { getDashboardReducer } from "./dashboard";
import userReducer from "./user";

export const reducers = combineReducers({
    getBlog: getBlogReducer,
    userHandler: userReducer,
    getDashboard:getDashboardReducer
})