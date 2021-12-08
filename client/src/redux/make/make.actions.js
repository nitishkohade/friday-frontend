import { getVehicleMakes } from "../../services/make.service"
import { MAKE_ACTION_TYPES } from "./make.types"

export const setVehicleMakes = () => {
    return async (dispatch) => {
        try{
            const {data, status} = await getVehicleMakes()
            const makes = data
            if(status === 200) {
                dispatch({
                    type: MAKE_ACTION_TYPES.SET_MAKES,
                    payload: makes
                })
            } else {
                dispatch({
                    type: MAKE_ACTION_TYPES.SET_ERROR_MESSAGE,
                    payload: makes
                })
            }
        } catch(err) {
            dispatch({
                type: MAKE_ACTION_TYPES.SET_ERROR_MESSAGE,
                payload: err.message || "Something went wrong. Error in loading vehicle Make."
            })
        }
    }
}

export const selectMake = (selectedMake) => ({
        type: MAKE_ACTION_TYPES.SELECT_MAKE,
        payload: selectedMake
})
