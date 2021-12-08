import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root_reducer";
import thunk from 'redux-thunk'

const middlewares = [thunk]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default {store}