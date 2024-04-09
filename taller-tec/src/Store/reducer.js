import { combineReducers } from "redux";
import configurationReducer from "./Reducers/Configuration/configurationReducer";

export default combineReducers({
    configuration: configurationReducer
})