import { GET_JWPLAYER_VIDEO_ID } from "./actionTypes"


export const getJwplayerVideoId = (videoId) => {
    return{
        type: GET_JWPLAYER_VIDEO_ID,
        payload: videoId,
    }
}