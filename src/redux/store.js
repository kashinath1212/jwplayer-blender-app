import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LandingApiIdReducer } from "./landing/landingReduce";

const rootReducer = combineReducers({  
    mediaId: LandingApiIdReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;