import { combineReducers } from "redux";
import makeReducer from "./make/make.reducers";
import modelReducer from "./model/model.reducers";
import vehicleReducer from "./vehicle/vehicle.reducers";

const rootReducer = combineReducers({
    make: makeReducer,
    model: modelReducer,
    vehicle: vehicleReducer
})

export default rootReducer