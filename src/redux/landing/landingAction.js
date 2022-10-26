import { GET_LANDING_API_ID } from "./actionType"
export const getLandingApiId = (item) => {
    console.log("landing action");
    return {
        type: GET_LANDING_API_ID,
        payload: item
    }
}