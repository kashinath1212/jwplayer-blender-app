import { GET_LANDING_API_ID } from "./actionType";

const initialState = {
    item: ''
}

export const LandingApiIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LANDING_API_ID:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}