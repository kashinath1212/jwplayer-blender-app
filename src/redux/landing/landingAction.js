import { GET_API_MEDIA_ID } from "./actionType"
export const getLandingApiId = (mediaId) => {
    console.log("landing action");
    return {
        type: GET_API_MEDIA_ID,
        payload: mediaId
    }
}