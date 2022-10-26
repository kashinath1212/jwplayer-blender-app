import { GET_JWPLAYER_VIDEO_ID } from "./actionTypes";

const initial = {
    videoId: ''
}

export const GetVideoApiReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_JWPLAYER_VIDEO_ID:
            return {
                ...state,
                videoId: action.payload
            }
        default:
            return state;
    }
}
