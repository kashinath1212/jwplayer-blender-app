import { GET_API_MEDIA_ID } from "./actionType";

const pathName = window.location.pathname
const pathId = pathName.slice(-8)
const initialState = {
    mediaid: pathId
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