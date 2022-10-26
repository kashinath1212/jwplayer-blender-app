import { GET_BANNER_API_ID } from "./actionType";

const initialState = {
    item: ''
}

export const BannerApiIdReducer = (state = initialState, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case GET_BANNER_API_ID:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}