import {combineReducers} from "redux";
import fetchReducer from './../Reducers/fetchData'

export default combineReducers({
    post:fetchReducer,
})