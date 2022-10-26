import { GET_BANNER_API_ID } from "./actionType"
export const getBannerApiId = (item) => {
    // console.log(item);
    return {
        type: GET_BANNER_API_ID,
        payload: item,
    }
}