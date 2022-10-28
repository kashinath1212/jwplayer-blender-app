import { GET_API_MEDIA_ID } from "./actionType"


export const getLandingApiId = (mediaId) => {
    return {
        type: GET_API_MEDIA_ID,
        payload: mediaId
    }
}