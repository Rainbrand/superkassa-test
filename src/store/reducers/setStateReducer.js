import {SET_STATE} from "../types";
import initialState from "../initialState";

const setStateReducer = (state = initialState.buttonToggled, action) => {
    switch (action.type){
        case SET_STATE:
            return action.payload
        default:
            return state
    }
}

export default setStateReducer
