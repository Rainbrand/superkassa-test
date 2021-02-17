import {combineReducers} from "redux";
import setStateReducer from "./reducers/setStateReducer";

const rootReducer = combineReducers({
    buttonReducer: setStateReducer
})

export default rootReducer
