import { VEHICLE_ACTION_TYPES } from "./vehicle.types"

const initialState = {
    vehicles: null,
    selectedVehicle: null,
    filters: {},
    selectedFilters: {},
    errorMessage: null,
    loadingVehicle: false
}

const vehicleReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case VEHICLE_ACTION_TYPES.SET_VEHICLES:
            try{
                const vehicles = action.payload
                const filters = {}
                const keys = vehicles[0] && Object.keys(vehicles[0]).filter(key => !(["model", "make"].includes(key)))
                vehicles.forEach(vehicle => {
                    keys.forEach(key => {
                        if(filters[key]) {
                            filters[key].add(vehicle[key])
                        } else {
                            filters[key] = new Set([vehicle[key]])
                        }
                    })
                })
                Object.keys(filters).forEach(key => {
                    filters[key] = Array.from(filters[key])
                })
                return {
                    ...state,
                    vehicles,
                    filters,
                    loadingVehicle: false,
                    selectedFilter: {},
                    errorMessage: null
                }
            } catch(err) {
                return {
                    ...state,
                    loadingVehicle: false,
                    errorMessage: "Error in setting the vehicle details."
                }
            }
        case VEHICLE_ACTION_TYPES.SET_FILTERS:
            try{
                const {key, value} = action.payload
                const selectedFilters = {...state.selectedFilters}
                selectedFilters[key] = value
                return {
                    ...state,
                    selectedFilters
                }
            } catch(err) {

            }

        case VEHICLE_ACTION_TYPES.SELECT_VEHICLE:
            const selectedVehicle = action.payload
            return {
                ...state,
                selectedVehicle
            }
        case VEHICLE_ACTION_TYPES.SET_ERROR_MESSAGE:
            const errorMessage = action.payload
            return {
                ...state,
                errorMessage
            }
        case VEHICLE_ACTION_TYPES.LOADING_VEHICLE:
            return {
                ...state,
                loadingVehicle: action.payload
            }
        case VEHICLE_ACTION_TYPES.REVERT_VEHICLE_TO_INITIAL_STATE:
            return initialState
        default:
            return state
    }
}

export default vehicleReducer