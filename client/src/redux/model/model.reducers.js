import { MODEL_ACTION_TYPES } from "./model.types"

const initialState = {
    models: null,
    selectedModel: null,
    errorMessage: null,
    initialize: false
}

const modelReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case MODEL_ACTION_TYPES.SET_MODELS:
            const models = action.payload
            return {
                ...state,
                initialize: true,
                models,
                errorMessage: null
            }
        case MODEL_ACTION_TYPES.SELECT_MODEL:
            const selectedModel = action.payload
            return {
                ...state,
                selectedModel,
                errorMessage: null
            }
        // case MODEL_ACTION_TYPES.SET_ERROR_MESSAGE:
        //     const errorMessage = action.payload
        //     return {
        //         ...state,
        //         errorMessage
        //     }
        case MODEL_ACTION_TYPES.REVERT_MODEL_TO_INITIAL_STATE:
            return initialState
        default:
            return state
    }
}

export default modelReducer