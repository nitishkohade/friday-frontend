import { getVehicleModels } from "../../services/model.service"
import { MODEL_ACTION_TYPES } from "./model.types"

export const setVehicleModels = (selectedMake) => {
    return async (dispatch) => {
        try{
            const {data, status} = await getVehicleModels(selectedMake)
            const models = data
            if(status === 200) {
                dispatch({
                    type: MODEL_ACTION_TYPES.SET_MODELS,
                    payload: models
                })
            } else {
                dispatch({
                    type: MODEL_ACTION_TYPES.SET_ERROR_MESSAGE,
                    payload: models
                })
            }
        } catch(err) {
            dispatch({
                type: MODEL_ACTION_TYPES.SET_ERROR_MESSAGE,
                payload: err.message || "Something went wrong. Error in loading Models of the Vehicle."
            })
        }
    }
}

export const selectModel = (selectedModel) => ({
        type: MODEL_ACTION_TYPES.SELECT_MODEL,
        payload: selectedModel
})

export const revertModelToInitialState = () => ({type: MODEL_ACTION_TYPES.REVERT_MODEL_TO_INITIAL_STATE})
