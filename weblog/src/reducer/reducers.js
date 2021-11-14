import { combineReducers } from "redux";
import { getBlogReducer } from "../reducer/blog";
import allUserReducer from "./allUsers";
import { getDashboardReducer } from "./dashboard";
import userReducer from "./user";

export const reducers = combineReducers({
    getBlog: getBlogReducer,
    userHandler: userReducer,
    getDashboard:getDashboardReducer,
    allUsers:allUserReducer
})