import {SET_STATE} from "../types"

const setStateAction = payload => {
    return{
        type: SET_STATE,
        payload: payload
    }
}

export default setStateAction
