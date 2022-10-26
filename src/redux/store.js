import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { BannerApiIdReducer } from "./banner/BannerReduce";
import { GetVideoApiReducer } from "./jwplayer/JwplayerReducer";
import { LandingApiIdReducer } from "./landing/landingReduce";

const rootReducer = combineReducers({
    Banners: BannerApiIdReducer,
    Landings: LandingApiIdReducer,
    videoId: GetVideoApiReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;