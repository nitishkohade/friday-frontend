import { getVehicles } from "../../services/vehicle.service"
import { VEHICLE_ACTION_TYPES } from "./vehicle.types"

export const setVehicle = (selectedMake, selectedModel) => {
    return async (dispatch) => {
        try{
            dispatch(setVehicleLoader(true))
            const {data, status} = await getVehicles(selectedMake, selectedModel)
            const vehicles = data
            if(status === 200) {
                dispatch({
                    type: VEHICLE_ACTION_TYPES.SET_VEHICLES,
                    payload: vehicles
                })
            } else {
                dispatch({
                    type: VEHICLE_ACTION_TYPES.SET_ERROR_MESSAGE,
                    payload: vehicles
                })
            }
        } catch(err) {
            dispatch({
                type: VEHICLE_ACTION_TYPES.SET_ERROR_MESSAGE,
                payload: err.message || "Something went wrong. Error in loading Vehicles."
            })
        }
    }
}

export const setErrorNull = () => ({
        type: VEHICLE_ACTION_TYPES.SET_ERROR_MESSAGE,
        payload: null
    })


export const setFilters = (key, value) => ({
        type: VEHICLE_ACTION_TYPES.SET_FILTERS,
        payload: {key, value}
    })

export const setVehicleLoader = (payload) => ({type: VEHICLE_ACTION_TYPES.LOADING_VEHICLE, payload})

export const selectVehicle = (selectedVehicle) => ({
        type: VEHICLE_ACTION_TYPES.SELECT_VEHICLE,
        payload: selectedVehicle
})

export const revertVehicleToInitialState = () => ({type: VEHICLE_ACTION_TYPES.REVERT_VEHICLE_TO_INITIAL_STATE})
