import { GET_API_MEDIA_ID } from "./actionType";

const initialState = {
    mediaid: ''
}

export const LandingApiIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_API_MEDIA_ID:
            return {
                ...state,
                mediaid: action.payload,
            }
        default:
            return state;
    }
}